"use server"

import { revalidatePath } from "next/cache"
import prisma from "./prismaClient"


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