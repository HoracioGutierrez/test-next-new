import { getStar, getStars } from "@/utils/noServerActions"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import Link from "next/link"

type Props = {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const stars = await getStars()
  return stars.map(star => ({
    params: {
      id: star.id
    }
  }))
}

export default async function page({ params: { id } }: Props) {

  const star = await getStar(Number(id))

  return (
    <section>
      <header className="mb-16">
        <h2 className="text-4xl font-semibold capitalize text-center mb-4">{star?.name}</h2>
        <h3 className="text-6xl font-semibold text-center">{star?.constellation}</h3>
      </header>
      <div>
        {star?.description?.split(". ").map((paragraph, index) => (
          <p className="mb-3 text-gray-600 font-serif" key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="text-center mt-16">
        <Link className="flex items-center gap-2 justify-center" href="/stars"><ArrowLeftIcon/>volver</Link>
      </div>
    </section>
  )
}