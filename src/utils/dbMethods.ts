import prisma from "./prismaClient"

export const revalidate = 60

export async function getStars() {
  const response = await prisma.star.findMany()
  return response
}