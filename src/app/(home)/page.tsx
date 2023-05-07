import prisma from "../../utils/prismaClient"

async function getStars() {
  const response = await prisma.star.findMany()
  return response
}

export default async function Home() {

  const starts = await getStars()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {starts.map(star => (
        <div key={star.id}>
          {star.name}
          {star.constellation}
        </div>
      ))}
    </main>
  )
}