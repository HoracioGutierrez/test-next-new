import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import CurlyLink from "./CurlyLink"
import GrayIcon from "./GrayIcon"
import Link from "next/link"

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="h-[74px] flex items-center px-[60px] justify-between border-b-[rgba(255,255,255,0.2)] border-b">
      <nav id="navigation" className="flex gap-[50px]">
        <CurlyLink href='/'>HOME</CurlyLink>
        <CurlyLink href='/stars'>STARS</CurlyLink>
        <CurlyLink href='/reviews'>REVIEWS</CurlyLink>
        <CurlyLink href='/about'>ABOUT</CurlyLink>
      </nav>
      <nav id="social" className="flex gap-[17px]">
        <GrayIcon>
          <Link href='https://www.instagram.com/horagutierrez/' target='_blank'>
            <InstagramLogoIcon width={24} height={24} className='group-hover:text-accent text-white  transition-colors duration-[0.3s]' />
          </Link>
        </GrayIcon>

        <GrayIcon>
          <Link href='https://www.github.com/horaciogutierrez/' target='_blank'>
            <GitHubLogoIcon width={24} height={24} className='group-hover:text-accent text-white  transition-colors duration-[0.3s]' />
          </Link>
        </GrayIcon>

        <GrayIcon>
          <Link href='https://www.linkedin.com/in/horacioegutierrez/' target='_blank'>
            <LinkedInLogoIcon width={24} height={24} className='group-hover:text-accent text-white  transition-colors duration-[0.3s]' />
          </Link>
        </GrayIcon>

      </nav>
    </header>
  )
}