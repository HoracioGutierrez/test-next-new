import { revalidatePath } from "next/cache"
import prisma from "./prismaClient"
import { cache } from "react"
import { db } from "./db"
import { StarSchema } from "../../drizzle/schema"
import { eq } from "drizzle-orm"

/* migrated */
export const getStars = cache(async () => {
  const stars = await db.select().from(StarSchema)
  return stars
})

export const getStar = cache(async (id: string) => {
  const response = await db.select().from(StarSchema).where(eq(StarSchema.id, Number(id)))
  return response
})

export const createStar = async (star: any) => {
  
}
/* end migrated */



/* not migrated */
export async function getComments() {
  const response = await prisma.comment.findMany({ orderBy: { createdAt: "desc" } })
  return response
}



export async function createComent(data: any) {
  try {
    const response = await prisma.comment.create({
      data: {
        comment: data.comment,
        author_name: data.author_name,
        avatar: data.avatar,
        profile_url: data.profile_url,
        rate: data.rate,
      },
    })
    revalidatePath("/comments/new")
    return response
  } catch (e) {
    throw new Error("Error creating comment")
  }
}


/* end not migrated */