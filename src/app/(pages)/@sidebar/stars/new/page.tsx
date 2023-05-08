import Link from "next/link"

type Props = {}
export default function page({ }: Props) {
  return (
    <>
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">New Star</h2>
      </header>
      <section>
        <p className="pb-3">Aca es bastante obvio, vas a poder agregar una estrella. Esto y probablemente la gran mayoria de los sidebars estan siendo ssr, incluido los dinamicos, no necesariamente ssg</p>
        <Link href="/stars" className="bg-slate-600 text-white p-2 mt-4 rounded block w-fit">volver</Link>
      </section>
    </>
  )
}