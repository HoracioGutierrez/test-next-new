import { Metadata } from 'next';
import { getStars } from "@/utils/noServerActions"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Stars"
};


type Props = {}

export default async function StarsContent({ }: Props) {

  const stars = await getStars()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {stars.map(star => (
        <article key={star.id} className="shadow bg-slate-100 p-2 rounded">
          <h2 className="font-semibold capitalize mb-2">{star.name}</h2>
          <div className="text-center">
            {star.constellation}
          </div>
          <button className="bg-slate-600 text-white p-2 mt-4 w-full rounded hover:text-yellow-200 transition-colors hover:bg-slate-700">
            <Link href={`/stars/${star.id}`} prefetch={false}>detalle</Link>
          </button>
        </article>
      ))}
    </section>
  )
}