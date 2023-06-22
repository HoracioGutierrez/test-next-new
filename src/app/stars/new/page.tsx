import BlueButton from "@/app/(components)/BlueButton"
import CurlyContainer from "@/app/(components)/CurlyContainer"
import Divider from "@/app/(components)/Divider"
import Input from "@/app/(components)/Input"
import Title from "@/app/(components)/Title"
import { createStar } from "@/utils/serverActions"
import Link from "next/link"

type Props = {}

export default function NewStarPage({ }: Props) {
    return (
        <>
            <header className="flex justify-between pt-[100px] items-center">
                <Title type="section">Nueva <span className="text-white !border-white" style={{ WebkitTextStroke: "1px white" }}>Estrella</span></Title>
                <CurlyContainer className="max-w-[600px] uppercase">
                    <p>En esta pagina vas a poder agregar un nuevo cuerpo celeste. Si, me di cuenta despues de hacer todo el diseño que no es una estrella, pero ya fue. <span className="text-accent"> Agrega una estrella !!!</span></p>
                </CurlyContainer>
            </header>
            <Divider className="my-[40px]" />
            <section >
                <form action={createStar} className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:justify-items-end">
                    <Input id="name" placeholder="Ej: Luna" label="Nombre"/>
                    <Input id="constellation" placeholder="Ej: 🌑 (es un emoji) " label="Imagen"/>
                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <Input id="distance" type="number" placeholder="Ej: 1000" label="Distancia"/>
                        <Input id="discoveryYear" placeholder="Ej: 1989" label="Año de descubrimiento" type="number"/>
                    </div>
                    <Input id="discoveredBy" placeholder="Ej: Galileo" label="Descubridor/a"/>
                    <Input id="description" placeholder="Descripcion Breve" label="Descripcion" as="textarea" containerClassName="w-full md:col-start-1 md:col-end-3" className="resize-none h-24"/>
                    <div className="flex gap-4 justify-end md:col-start-2">
                        <BlueButton className="w-fit " type="button">
                            <Link href="/stars"> volver </Link>
                        </BlueButton>
                        <BlueButton text="crear" className="w-fit md:col-start-2"/>
                    </div>
                </form>
            </section>
        </>
    )
}

/* 

    name: varchar('name', { length: 255 }),
    constellation: varchar('constellation', { length: 255 }),
    distance: int('distance'),
    discoveredBy: varchar('discoveredBy', { length: 255 }),
    discoveryYear: int('discoveredBy'),
    description: text('description'),
    
*/