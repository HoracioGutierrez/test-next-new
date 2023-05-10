import { getStars } from "@/utils/dbMethods"
import Link from "next/link"

export const dynamic = 'force-static'
export const runtime = 'edge';

type Props = {}

export default async function StarsContent({ }: Props) {

  const starts = await getStars()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {starts.map(star => (
        <article key={star.id} className="shadow bg-slate-100 p-2 rounded">
          <h2 className="font-semibold capitalize mb-2">{star.name}</h2>
          <div className="text-center">
            {star.constellation}
          </div>
          <button className="bg-slate-600 text-white p-2 mt-4 w-full rounded">
            <Link href={`/stars/${star.id}`}>detalle</Link>
          </button>
        </article>
      ))}
    </section>
  )
}