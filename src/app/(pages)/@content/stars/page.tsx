"use client"
import { getStars } from "@/utils/dbMethods"
import Link from "next/link"

export async function getStaticProps() {
  const starts = await getStars()
  return {
    props: {
      starts
    }
  };
}

type Props = {
  starts: any[]
}

export default async function StarsContent({ starts }: Props) {


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