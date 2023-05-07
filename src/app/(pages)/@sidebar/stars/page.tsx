type Props = {}

export default function StarsSidebar({ }: Props) {
  return (
    <>
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Stars</h2>
      </header>
      <section>
        <p className="pb-3 text-sm text-gray-400 italic">"Stars are hot"</p>
        <p className="pb-3">En esta pagina queda demostrado como un componente de servidor puede traer desde la base de datos directamente informacion colocalizando en el mismo archivo la parte que lo va a mostrar.</p>
        <p className="pb-3">En una proxima iteracion, se va a agregar la parte del loading y streaming por lazi loading.</p>
        <p>Mas adelante para terminar se va a agregar el detalle de cada recurso junto con la posibilidad de dar de alta y baja</p>
      </section>
    </>
  )
}