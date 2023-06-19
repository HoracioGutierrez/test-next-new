"use client"
import { GitHubLogoIcon, HamburgerMenuIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import CurlyLink from "../CurlyLink"
import GrayIcon from "../GrayIcon"
import Link from "next/link"
import { useMediaQuery } from "@mantine/hooks"
import { useDisclosure } from '@mantine/hooks';
import MainDrawer from "./MainDrawer"

type Props = {}

export default function Header({ }: Props) {

  const mobile = useMediaQuery('(max-width: 768px)')
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <header className="h-14 lg:h-[74px] flex items-center px-4 lg:px-[60px] justify-between border-b-[rgba(255,255,255,0.2)] border-b">
        <nav id="navigation" className="flex gap-[50px]">
          
          {mobile === false && (
            <>
              <CurlyLink href='/'>HOME</CurlyLink>
              <CurlyLink href='/stars'>STARS</CurlyLink>
              <CurlyLink href='/reviews'>REVIEWS</CurlyLink>
              <CurlyLink href='/about'>ABOUT</CurlyLink>
            </>
          )}
          
          {mobile === true && (
            <HamburgerMenuIcon color="white" width={30} height={30} className="cursor-pointer" onClick={open} />
          )}

        </nav>
        <nav id="social" className="flex gap-[17px]">
          <GrayIcon>
            <Link href='https://www.instagram.com/horagutierrez/' target='_blank'>
              <InstagramLogoIcon className='lg:w-6 w-5 lg:h-6 h-5 group-hover:text-accent text-white  transition-colors duration-[0.3s]' />
            </Link>
          </GrayIcon>

          <GrayIcon>
            <Link href='https://www.github.com/horaciogutierrez/' target='_blank'>
              <GitHubLogoIcon className='lg:w-6 w-5 lg:h-6 h-5 group-hover:text-accent text-white  transition-colors duration-[0.3s]' />
            </Link>
          </GrayIcon>

          <GrayIcon>
            <Link href='https://www.linkedin.com/in/horacioegutierrez/' target='_blank'>
              <LinkedInLogoIcon className=' lg:w-6 w-5 lg:h-6 h-5 group-hover:text-accent text-white  transition-colors duration-[0.3s]' />
            </Link>
          </GrayIcon>

        </nav>
      </header>

      <MainDrawer opened={opened} close={close} />
    </>
  )
}