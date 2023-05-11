import Link from "next/link"

export async function getStaticProps() {
  return {
    props: {}
  };
}

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
        <Link prefetch={false}  href="/comments/new" className="bg-slate-600 text-white p-2 mt-4 rounded block w-fit">agregar comentario</Link>
      </section>
    </>
  )
}