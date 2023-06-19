import { db } from "@/utils/db"
import BlueButton from "../(components)/BlueButton"
import CardFrame from "../(components)/CardFrame"
import CurlyContainer from "../(components)/CurlyContainer"
import Divider from "../(components)/Divider"
import Text from "../(components)/Text"
import Title from "../(components)/Title"
import { StarSchema } from "../../../drizzle/schema"
import Link from "next/link"

type Props = {}
export default async function StarPage({ }: Props) {

  const stars = await db.select().from(StarSchema)

  console.log(stars)

  return (
    <>
      <header className="flex justify-between pt-[100px] items-center">
        <Title type="section">"Stars <span className="text-white !border-white" style={{ WebkitTextStroke: "1px white" }}>are hot"</span></Title>
        <CurlyContainer className="max-w-[600px] uppercase">
          En esta pagina queda demostrado como un componente de servidor puede traer desde la base de datos directamente informacion colocalizando en el mismo archivo la parte que lo va a mostrar.
        </CurlyContainer>
      </header>
      <Divider className="my-[40px]" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-[20px] lg:gap-[24px] xl:gap-[28px]">
        {stars.map((star) => (
          <CardFrame className="flex flex-col items-center min-h-[130px] justify-center">
            <span className="mb-4 text-2xl">{star.constellation}</span>
            <Text type="card-1" className="my-4">{star.name}</Text>
            <BlueButton className="">
              <Link href={`/stars/${star.id}`}>
                detalles
              </Link>
            </BlueButton>
          </CardFrame>
        ))}
      </section>
      <BlueButton text="Agregar Estrella" className="mx-auto my-[50px]" />
    </>
  )
}