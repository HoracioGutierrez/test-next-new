import Header from "./Header"

type Props = {
  children?: React.ReactNode,
  sidebar: React.ReactNode,
  content: React.ReactNode
}

export default function PagesLayout({ sidebar, content }: Props) {
  return (
    <>
      <Header isPage />
      <main className="md:grid md:grid-cols-[minmax(400px,1fr)_2fr] flex-grow">
        <div className="sidebar p-4 text-gray-200">
          {sidebar}
        </div>
        <div className="content p-4 pt-20 bg-gray-200 h-full">
          {content}
        </div>
      </main>
    </>
  )
}