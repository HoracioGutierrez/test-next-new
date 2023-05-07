import Link from "next/link"

type Props = {
  isPage?: boolean
}

export default function NavigationBar({ isPage }: Props) {
  return (
    <nav className={`grid grid-cols-${ isPage ? "3" : "2" } gap-4`}>
      {isPage && <Link className={`text-gray-${isPage ? "400" : "600"} hover:text-gray-${isPage ? "200" : "400"}`} href="/">home</Link>}
      <Link className={`text-gray-${isPage ? "400" : "600"} hover:text-gray-${isPage ? "200" : "400"}`} href="/stars">starts</Link>
      <Link className={`text-gray-${isPage ? "400" : "600"} hover:text-gray-${isPage ? "200" : "400"}`} href="/about">about</Link>
    </nav>
  )
}