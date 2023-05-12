import { revalidatePath } from "next/cache"
import prisma from "./prismaClient"
import { z } from "zod"
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



export async function getStartCount() {
  const response = await prisma.star.count()
  return response
}

export const createStar = async (star : any) => {
  try {
    const resultado = await prisma.star.create({
      data: {
        name: star.name as string,
        distance: Number(star.distance),
        description: star.description as string,
        discoveryYear: Number(star.discoveryYear),
        discoveredBy: star.discoveredBy as string,
        constellation: star.constellation as string
      },
    })
    revalidatePath("/stars/new")
    return resultado
  } catch (e) {
    throw new Error("Error creating star")
  }
}

export const validateStar = (formData: FormData) => {
  const name = formData.get('name')
  const distance = formData.get('distance')
  const description = formData.get('description')
  const discoveryYear = formData.get('discoveryYear')
  const discoveredBy = formData.get('discoveredBy')
  const constellation = formData.get('constellation')

  const star = {
    name,
    distance,
    description,
    discoveryYear,
    discoveredBy,
    constellation
  }

  try {

    const schema = z.object({
      name: z.string({ required_error: "Name is required" }).min(3, "Name must be at least 3 characters long").max(50, "Name must be less than 50 characters long").regex(/^[a-zA-Z\s]*$/, "Discoverer must only contain letters and spaces"),
      distance: z.number({ required_error: "Distance is required" }).min(0, "Distance must be positive").max(1000000, "Distance must be less than 1000000"),
      description: z.string({ required_error: "Description is required" }).min(3, "Description must be at least 3 characters long").max(1500, "Description must be less than 500 characters long"),
      discoveryYear: z.number({ required_error: "Discovery year is required" }).min(0, "Discovery year must be positive").max(3000, "Discovery year must be less than 3000").positive("Discovery year must be positive"),
      discoveredBy: z.string({ required_error: "Discoverer is required" }).min(3, "Discoverer must be at least 3 characters long").max(50, "Discoverer must be less than 50 characters long").regex(/^[a-zA-Z\s]*$/, "Discoverer must only contain letters and spaces"),
      constellation: z.string({ required_error: "Constellation is required" }).min(3, "Constellation must be at least 3 characters long").max(50, "Constellation must be less than 50 characters long").regex(/^[a-zA-Z\s]*$/, "Constellation must be an emoji"),
    })

    schema.parse(star)
    return star

  } catch (e) {
    return false
  }
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