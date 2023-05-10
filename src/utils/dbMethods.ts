"use server"
import { revalidatePath } from "next/cache";
import prisma from "./prismaClient"
import { redirect } from 'next/navigation';
import { string, z } from "zod";
import { object } from "yup"

export async function getStars() {
  const response = await prisma.star.findMany()
  return response
}

export async function getStar(id: number) {
  const response = await prisma.star.findUnique({
    where: {
      id,
    },
  })
  return response
}


export interface Star {
  name: string
  distance: number
  description: string,
  discoveredYear: number,
  discoveredBy: string,
  constellation: string
}

export async function createStar(data: any) {
  try {
    const response = await prisma.star.create({
      data: {
        name: data.name,
        distance: Number(data.distance),
        description: data.description,
        discoveryYear: Number(data.discoveryYear),
        discoveredBy: data.discoveredBy,
        constellation: data.constellation
      },
    })
    revalidatePath("/stars/new")
    return response
  } catch (e) {
    throw new Error("Error creating star")
  }
}

function withStarValidation(callback: Function) {

  return async (formData: FormData) => {

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

    const schema = z.object({
      name: z.string({ required_error: "Name is required" }).min(3, "Name must be at least 3 characters long").max(50, "Name must be less than 50 characters long").regex(/^[a-zA-Z\s]*$/, "Discoverer must only contain letters and spaces"),
      distance: z.number({ required_error: "Distance is required" }).min(0, "Distance must be positive").max(1000000, "Distance must be less than 1000000"),
      description: z.string({ required_error: "Description is required" }).min(3, "Description must be at least 3 characters long").max(1500, "Description must be less than 500 characters long"),
      discoveryYear: z.number({ required_error: "Discovery year is required" }).min(0, "Discovery year must be positive").max(3000, "Discovery year must be less than 3000").positive("Discovery year must be positive"),
      discoveredBy: z.string({ required_error: "Discoverer is required" }).min(3, "Discoverer must be at least 3 characters long").max(50, "Discoverer must be less than 50 characters long").regex(/^[a-zA-Z\s]*$/, "Discoverer must only contain letters and spaces"),
      constellation: z.string({ required_error: "Constellation is required" }).min(3, "Constellation must be at least 3 characters long").max(50, "Constellation must be less than 50 characters long").regex(/^[a-zA-Z\s]*$/, "Constellation must be an emoji"),
    })
    try {
      schema.parse(star)
      return callback(star)
    } catch (e: any) {
      throw new Error(JSON.stringify(e.errors[0]))
    }
  }
}


export const createStarWithValidation = withStarValidation(createStar)


export async function getStartCount() {
  const response = await prisma.star.count()
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

export async function getComments() {
  const response = await prisma.comment.findMany()
  return response
}