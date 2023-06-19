import { Drawer } from "@mantine/core"
import CurlyLink from "../CurlyLink"
import Image from "next/image"
import avatar from "../../(assets)/avatar.png"

type Props = {
    opened: boolean,
    close: () => void
}

export default function MainDrawer({ opened = false, close }: Props) {


    return (
        <Drawer.Root className="bg-dark" opened={opened} onClose={close}>
            <Drawer.Overlay />
            <Drawer.Content className="bg-dark">
                <Drawer.Header className="bg-dark pl-[20px]">
                    <Image src={avatar} alt="Horacio Gutierrez" width={50} height={50} />
                    <Drawer.CloseButton />
                </Drawer.Header>
                <Drawer.Body className="bg-dark flex flex-col gap-4 pl-[20px]">
                    <CurlyLink href='/' className="!items-center">HOME</CurlyLink>
                    <CurlyLink href='/swatches' className="!items-center">SWATCHES</CurlyLink>
                    <CurlyLink href='/stars' className="!items-center">STARS</CurlyLink>
                    <CurlyLink href='/reviews' className="!items-center">REVIEWS</CurlyLink>
                    <CurlyLink href='/about' className="!items-center">ABOUT</CurlyLink>
                </Drawer.Body>
            </Drawer.Content>
        </Drawer.Root>
    )
}