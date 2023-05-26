import { Metadata } from 'next';
import { getStars } from "@/utils/noServerActions"
import Link from "next/link"
import LinkButton from '@/app/(components)/LinkButton';

export const metadata: Metadata = {
  title: "Stars"
};


type Props = {}

export default async function StarsContent({ }: Props) {

  const stars = await getStars()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {stars.map(star => (
        <article key={star.id} className="shadow group bg-transparent border-slate-600 border-2 p-2 rounded ripple-bg-slate-600">
          <h2 className="font-semibold capitalize mb-2 text-white">{star.name}</h2>
          <div className="text-center">
            {star.constellation}
          </div>
          <LinkButton href={`/stars/${star.id}`} className="w-full">detalle</LinkButton>
        </article>
      ))}
    </section>
  )
}