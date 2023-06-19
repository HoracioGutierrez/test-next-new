import Header from "./layout/Header"

type Props = {
  children?: React.ReactNode,
  sidebar: React.ReactNode,
  content: React.ReactNode
}

export default function PagesLayout({ sidebar, content }: Props) {
  return (
    <>
      <Header />
      <main className="md:grid md:grid-cols-[minmax(400px,1fr)_2fr] flex-grow">
        <div className="sidebar p-4 py-20 text-gray-200 relative">
          <div className="sticky top-20 left-0">
            {sidebar}
          </div>
        </div>
        <div className="content p-4 pt-20 h-fit md:h-full">
          {content}
        </div>
      </main>
    </>
  )
}