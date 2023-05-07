import { getStars } from "@/utils/dbMethods"

type Props = {}

export default async function StarsContent({ }: Props) {

  const starts = await getStars()

  return (
    <section>
      {starts.map(star => (
        <article key={star.id}>
          {star.name}
          {star.constellation}
        </article>
      ))}
    </section>
  )
}