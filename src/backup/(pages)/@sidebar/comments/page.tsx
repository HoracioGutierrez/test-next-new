import LinkButton from "@/app/(components)/LinkButton"
import Link from "next/link"

type Props = {}
export default function CommentsSidebar({ }: Props) {
  return (
    <>
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Comentarios</h2>
      </header>
      <section>
        <p className="pb-3">Aca supuestamente se van a ver los comentarios que gente random me va dejando, como por ejemplo alumnos que tomaron clase conmigo, managers de alguna empresa por la que pase a dar un curso o bien estuve desarrollando como freelance, etc.</p>
        <p className="pb-3">Digo supuestamente porque en teoria funciona pero anda a saber cuando se va a caer todo esto no?</p>
        <LinkButton href="comments/new">agregar comentario</LinkButton>
      </section>
    </>
  )
}