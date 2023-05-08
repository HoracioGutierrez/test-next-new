type Props = {}

export default function loading({ }: Props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {[...Array(10)].map((_, i) => (
        <article key={i} className="shadow bg-slate-100 p-2 rounded">
          <div className="animate-pulse h-4 w-1/2 bg-slate-300"/>
          <div className="animate-pulse h-8 w-8 bg-slate-300 mt-2 mx-auto"/>
          <div className="animate-pulse h-6 w-full bg-slate-300 mt-2 rounded"/>
        </article>
      ))}
    </section>
  )
}