import CurlyContainer from "@/app/(components)/CurlyContainer"
import Title from "@/app/(components)/Title"
import Text from "@/app/(components)/Text";
import Divider from "@/app/(components)/Divider";
import CardFrame from "@/app/(components)/CardFrame";
import { getStar, getStars } from "@/utils/noServerActions";

type Props = {
    params: {
        id: string
    }
}

export const generateStaticParams = process.env.NODE_ENV !== 'development' ? async () => {
        const stars = await getStars()
        return stars.map(star => ({
            params: {
                id: star.id.toString()
            }
        }))
    } : undefined

export default async function page({ params: { id } }: Props) {

    const [star] = await getStar(id)

    return (
        <>
            <header className="flex justify-between pt-[100px] items-center">
                <Title type="section"><span className="text-white !border-white uppercase" style={{ WebkitTextStroke: "1px white" }}>"{star.name}"</span></Title>
                <CurlyContainer className="max-w-[600px] uppercase">
                    <div className="flex gap-2">
                        <Text type="regular" className="uppercase font-[300]">Año de descubrimiento : </Text>
                        <Text type="regular" className="!text-accent">{star.discoveryYear}</Text>
                    </div>
                    <div className="flex gap-2">
                        <Text type="regular" className="uppercase font-[300]">Descubridor/a : </Text>
                        <Text type="regular" className="!text-accent">{star.discoveredBy}</Text>
                    </div>
                    <div className="flex gap-2">
                        <Text type="regular" className="uppercase font-[300]">Distancia : </Text>
                        <Text type="regular" className="!text-accent">{star.distance}</Text>
                    </div>
                </CurlyContainer>
            </header>
            <Divider className="my-[40px]" />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-[11px]">
                <CardFrame className="flex items-center justify-center p-10">
                    <span className="text-[100px]">{star.constellation}</span>
                </CardFrame>
                <CardFrame>
                    <Text type="card-1" className="p-4 font-[300] text-[20px] leading-6">{star.description}</Text>
                </CardFrame>
            </section>
        </>
    )
}