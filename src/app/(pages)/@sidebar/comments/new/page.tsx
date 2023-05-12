import Link from "next/link"

type Props = {}
export default function NewCommentSidebar({ }: Props) {
  return (
    <>
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Nuevo Comentario</h2>
      </header>
      <section>
        <p className="pb-3">Aca en teoria van a poder escribirme comentarios de lo que quiera, como "que groso que sos Horacio".</p>
        <p className="pb-3">Tambien se podrian dejar bardeadas porque no hice ningun filtro ni moderacion...pero por ahora no esta implementado, asi que da igual.</p>
        <p className="pb-3">Si queres ir a la pagina anterior, hace click en el siguiente boton.</p>
        <Link href="/comments" prefetch={false} className="bg-slate-600 text-white p-2 mt-4 rounded block w-fit">volver</Link>
      </section>
    </>
  )
}