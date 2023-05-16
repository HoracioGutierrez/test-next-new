import ClientRating from "@/app/(components)/ClientRating"
import { getComments } from "@/utils/noServerActions"
import { Metadata } from "next";

export const metadata : Metadata = {
  title : "Comentarios",
}

type Props = {}

export const revalidate = 60;

export default async function CommentsContent({  }: Props) {

  const comments = await getComments()

  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {comments.map(comment => (
        <article key={comment.id} className="shadow bg-slate-100 p-2 rounded">
          <div className="flex items-center gap-2">
            <img src={comment.avatar || ""} alt="" className="h-20 w-20 rounded-full" />
            <div className="flex flex-col">
              <h2 className="font-semibold capitalize">{comment.author_name}</h2>
              {comment.profile_url && <a href={comment.profile_url} className="text-blue-500 font-light text-xs">ver perfil</a>}
            </div>
          </div>
          <div className="p-2 bg-slate-200 rounded my-2">
            <p className="text-sm">"{comment.comment}"</p>
          </div>
          <div className="flex justify-end items-baseline mt-4 gap-2">
            <p className="text-xs text-slate-500 relative top-[1px]">
              {new Date(comment.createdAt).toLocaleDateString()}
            </p>
            <ClientRating rate={comment.rate} />
          </div>
        </article>
      ))}
    </section>
  )
}