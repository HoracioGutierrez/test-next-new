import { InstagramLogoIcon , LinkedInLogoIcon , GitHubLogoIcon } from "@radix-ui/react-icons"

type Props = {}
export default function AboutContent({}: Props) {
  return (
    <div className="h-full">
      <nav className="flex justify-center gap-4">
        <a href="https://www.instagram.com/horagutierrez"><InstagramLogoIcon width={30} height={30}/></a>
        <a href="https://www.linkedin.com/in/horacioegutierrez/"><LinkedInLogoIcon width={30} height={30}/></a>
        <a href="https://github.com/HoracioGutierrez"><GitHubLogoIcon width={30} height={30}/></a>
      </nav>
    </div>
  )
}