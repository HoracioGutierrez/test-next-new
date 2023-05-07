import { InstagramLogoIcon , LinkedInLogoIcon , GitHubLogoIcon } from "@radix-ui/react-icons"

type Props = {}
export default function AboutContent({}: Props) {
  return (
    <div className="h-full">
      <nav className="flex justify-center gap-4">
        <a href="http://instagram.com"><InstagramLogoIcon width={30} height={30}/></a>
        <a href="http://linkedin.com"><LinkedInLogoIcon width={30} height={30}/></a>
        <a href="http://github.com"><GitHubLogoIcon width={30} height={30}/></a>
      </nav>
    </div>
  )
}