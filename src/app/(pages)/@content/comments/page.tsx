import ClientRating from "@/app/(components)/ClientRating"
import { getComments } from "@/utils/dbMethods"

type Props = {}
export default async function CommentsContent({ }: Props) {

  const comments = await getComments()

  return (
    <section>
      {comments.map(comment => (
        <article key={comment.id} className="shadow bg-slate-100 p-2 rounded">
          <img src={comment.avatar} alt="" className="h-20 w-20 rounded-full" />
          <h2 className="font-semibold capitalize mb-2">{comment.author_name}</h2>
          <p className="text-sm">{comment.comment}</p>
          <ClientRating rate={comment.rate} />
          <p className="text-xs text-slate-500">
            {new Date(comment.createdAt).toLocaleDateString()}
          </p>
        </article>
      ))}
    </section>
  )
}