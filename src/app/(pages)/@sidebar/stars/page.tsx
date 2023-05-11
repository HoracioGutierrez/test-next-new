import Link from "next/link"

export const dynamic = "force-static"

export default function StarsSidebar() {
  return (
    <>
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Stars</h2>
      </header>
      <section>
        <p className="pb-3 text-sm text-gray-400 italic">"Stars are hot"</p>
        <p className="pb-3">En esta pagina queda demostrado como un componente de servidor puede traer desde la base de datos directamente informacion colocalizando en el mismo archivo la parte que lo va a mostrar.</p>
        <p className="pb-3">En una proxima iteracion, se va a agregar la parte del loading (*esto ya se hizo) y streaming por lazi loading (que es al pedo porque el componente no es de cliente, no necesita lazy loading, puede ser ssr tranquilamente para mas placer).</p>
        <p>Mas adelante para terminar se va a agregar el detalle de cada recurso junto con la posibilidad de dar de alta y baja</p>
        <Link prefetch={false} href="/stars/new" className="bg-slate-600 text-white p-2 mt-4 rounded block w-fit">agregar estrella</Link>
      </section>
    </>
  )
}