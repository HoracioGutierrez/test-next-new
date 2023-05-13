import { revalidatePath } from "next/cache"
import prisma from "./prismaClient"
import { cache } from "react"

export const getStars = cache(async () => {
  const response = await prisma.star.findMany()
  return response
})

export async function getComments() {
  const response = await prisma.comment.findMany()
  return response
}

export const getStar = cache(async (id: number) => {
  const response = await prisma.star.findUnique({ where: { id }})
  return response
})


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