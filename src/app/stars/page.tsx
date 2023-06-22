import BlueButton from "../(components)/BlueButton"
import CardFrame from "../(components)/CardFrame"
import CurlyContainer from "../(components)/CurlyContainer"
import Divider from "../(components)/Divider"
import Text from "../(components)/Text"
import Title from "../(components)/Title"
import Link from "next/link"
import { getStars } from "@/utils/noServerActions"

type Props = {}

export default async function StarPage({ }: Props) {

  const stars = await getStars()

  return (
    <>
      <header className="flex justify-between pt-[100px] items-center">
        <Title type="section">"Stars <span className="text-white !border-white" style={{ WebkitTextStroke: "1px white" }}>are hot"</span></Title>
        <CurlyContainer className="max-w-[700px] uppercase">
          <p>
            En esta pagina queda demostrado como un componente de servidor puede traer desde la base de datos directamente informacion colocalizando en el mismo archivo la parte que lo va a mostrar.
            La misma esta creada como recurso estatico de HTML utilizando la tecnica de <span className="text-accent"> SSG </span> y <span className="text-accent"> ISR </span>.
          </p>
        </CurlyContainer>
      </header>
      <Divider className="my-[40px]" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-[20px] lg:gap-[24px] xl:gap-[28px]">
        {stars.map((star) => (
          <CardFrame key={star.id} className="flex flex-col items-center min-h-[130px] justify-center">
            <span className="mb-4 text-2xl">{star.constellation}</span>
            <Text type="card-1" className="my-4 uppercase font-[300]">{star.name}</Text>
            <BlueButton className="">
              <Link href={`/stars/${star.id}`}>
                detalles
              </Link>
            </BlueButton>
          </CardFrame>
        ))}
      </section>
      <BlueButton className="mx-auto my-[50px]">
        <Link href="/stars/new">
          AGREGAR ESTRELLA
        </Link>
      </BlueButton>
    </>
  )
}