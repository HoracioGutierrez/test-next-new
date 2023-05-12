type Props = {}

export default function loading({ }: Props) {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {[...Array(10)].map((_, i) => (
        <article key={i} className="shadow bg-slate-100 p-2 rounded">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-slate-300 rounded-full animate-pulse"/>
            <div className="flex flex-col">
              <div className="animate-pulse h-4 w-36 bg-slate-300"/>
              <div className="animate-pulse h-3 w-16 bg-slate-300 mt-2"/>
            </div>
          </div>
          <div className="p-2 bg-slate-200 rounded my-2">
            <div className="animate-pulse h-8 w-full bg-slate-300 rounded"/>
          </div>
          <div className="flex justify-end items-baseline mt-4 gap-2">
            <div className="animate-pulse h-4 w-12 bg-slate-300 rounded"/>
          </div>
        </article>
      ))}
    </section>
  )
}