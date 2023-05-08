import prisma from "./prismaClient"

export const revalidate = 60

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

export async function createStar(data:any) {
  "use server"
  const name = data.get('name')
  const distance = data.get('distance')
  const description = data.get('description')
  const discoveryYear = data.get('discoveryYear')
  const discoveredBy = data.get('discoveredBy')
  const constellation = data.get('constellation')
  const response = await prisma.star.create({
    data: {
      name,
      distance : Number(distance),
      description,
      discoveryYear : Number(discoveryYear),
      discoveredBy,
      constellation
    },
  })
  return response
}