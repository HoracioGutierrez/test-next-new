import Link from "next/link"

type Props = {
  isPage?: boolean
}

export default function NavigationBar({ isPage }: Props) {
  return (
    <nav className={`flex gap-4`}>
      {isPage && <Link className="text-gray-400 hover:text-yellow-200 transition-colors" href="/" prefetch={false}>home</Link>}
      <Link className="text-gray-400 hover:text-yellow-200 transition-colors" href="/stars" prefetch={false}>starts</Link>
      <Link className="text-gray-400 hover:text-yellow-200 transition-colors" href="/comments" prefetch={false}>comments</Link>
      <Link className="text-gray-400 hover:text-yellow-200 transition-colors" href="/about" prefetch={false}>about</Link>
    </nav>
  )
}