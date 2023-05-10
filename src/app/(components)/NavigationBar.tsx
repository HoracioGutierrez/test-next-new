import Link from "next/link"

type Props = {
  isPage?: boolean
}

export default function NavigationBar({ isPage }: Props) {
  return (
    <nav className={`flex gap-4`}>
      {isPage && <Link className="text-gray-400 hover:text-gray-200" href="/">home</Link>}
      <Link className="text-gray-400 hover:text-gray-200" href="/stars">starts</Link>
      <Link className="text-gray-400 hover:text-gray-200" href="/comments">comments</Link>
      <Link className="text-gray-400 hover:text-gray-200" href="/about">about</Link>
    </nav>
  )
}