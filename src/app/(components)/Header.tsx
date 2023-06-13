"use client"
import Link from "next/link"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { usePathname } from "next/navigation"

type Props = {
}


export default function Header({ }: Props) {

  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center py-5 px-16 border-b-2 border-b-[#232323]">
      <nav className="navigation-links flex gap-12 uppercase">
        <Link href="/" className={`navigation-link font-semibold text-lg tracking-tight  ${pathname == "/" ? "text-[#007eff] active" : "text-white"}`}>home</Link>
        <Link href="/stars" className={`navigation-link font-semibold text-lg tracking-tight  ${pathname == "/stars" ? "text-[#007eff] active" : "text-white"} `}>stars</Link>
        <Link href="/reviews" className={`navigation-link font-semibold text-lg tracking-tight  ${pathname == "/reviews" ? "text-[#007eff] active" : "text-white"}`}>reviews</Link>
        <Link href="/about" className={`navigation-link font-semibold text-lg tracking-tight  ${pathname == "/about" ? "text-[#007eff] active" : "text-white"}`}>about</Link>
      </nav>
      <nav className="social-links flex items-center text-white gap-5">
        <a target="_blank" className="p-2 bg-[rgba(255,255,255,0.1)] border-dashed border-[rgba(255,255,255,0.1)] border hover:bg-[#007eff] transition-[background-color] duration-300" href="https://github.com/HoracioGutierrez">
          <GitHubLogoIcon width={30} height={30} />
        </a>
        <a target="_blank" className="p-2 bg-[rgba(255,255,255,0.1)] border-dashed border-[rgba(255,255,255,0.1)] border hover:bg-[#007eff] transition-[background-color] duration-300" href="https://www.linkedin.com/in/horacioegutierrez/">
          <LinkedInLogoIcon width={30} height={30} />
        </a>
        <a target="_blank" className="p-2 bg-[rgba(255,255,255,0.1)] border-dashed border-[rgba(255,255,255,0.1)] border hover:bg-[#007eff] transition-[background-color] duration-300" href="https://www.instagram.com/horagutierrez">
          <InstagramLogoIcon width={30} height={30} />
        </a>
      </nav>
    </header>
  )
}