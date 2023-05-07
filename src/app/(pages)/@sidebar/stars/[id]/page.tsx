import { getStar } from "@/utils/dbMethods"

type Props = {
  params: {
    id: string
  }
}

export default async function page({ params: { id } }: Props) {

  const star = await getStar(Number(id))

  return (
    <>
      <header className="mb-6">
        <h2 className="text-4xl font-semibold capitalize">{star?.name}</h2>
      </header>
      <section>
        
        <h3 className="text-xl font-semibold mb-8">Stats</h3>

        <p className="mb-6">
          <span className="text-gray-500">Descubridor/a : </span> <br /> {star?.discoveredBy}
        </p>

        <p className="mb-6">
          <span className="text-gray-500">Año de descubrimiento : </span> <br /> {star?.discoveryYear == -1 ? "Desconocido" : star?.discoveryYear}
        </p>

        <p className="mb-6">
          <span className="text-gray-500">Distancia : </span> <br /> {star?.distance == -1 ? "Varia / Desconocida" : star?.discoveryYear + " años luz"}
        </p>

      </section>
    </>
  )
}