import Link from "next/link"

type Props = {}

export default function AboutSidebar({ }: Props) {
  return (
    <>
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Acerca de mi</h2>
      </header>
      <section>
        <p className="mb-6">Mi nombre es <span className="italic font-semibold text-blue-500">Horacio Gutierrez</span> <span className="italic text-xs text-gray-500">(no, no soy un link)</span>, vivo en Buenos Aires, Argentina, tengo 33 años (dependiendo cuando estes leyendo este texto) y aparentemente soy programador.</p>
        <p>Aca iba a haber un formulario para que te pongas en contacto conmigo pero como adelante en el <Link href="/" className="text-blue-500">inicio</Link>, todo esto esta en construccion asi que de momento voy a contarte un poco sobre mi y ya que estamos te dejo links para que puedas igual darme dinero.</p>
        <p className="font-semibold">big money!</p>
      </section>
    </>
  )
}