type Props = {}

export default function loading({ }: Props) {
  return (
    <>
      <p className="text-center text-2xl font-bold">Current Star Count: Loading...</p>
      <form>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
          <div className="animate-pulse h-6 w-full bg-slate-300 mt-2 rounded" />
        </div>
        <div>
          <label htmlFor="constellation" className="text-sm font-medium text-gray-400">Constellation</label>
          <div className="animate-pulse h-6 w-full bg-slate-300 mt-2 rounded" />
        </div>
        <div>
          <label htmlFor="discoveredBy" className="text-sm font-medium text-gray-400">Discovered By</label>
          <div className="animate-pulse h-6 w-full bg-slate-300 mt-2 rounded" />
        </div>
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="distance" className="text-sm font-medium text-gray-400">Distance</label>
            <div className="animate-pulse h-6 w-full bg-slate-300 mt-2 rounded" />
          </div>
          <div className="w-full">
            <label htmlFor="discoveredYear" className="text-sm font-medium text-gray-400">Discovered Year</label>
            <div className="animate-pulse h-6 w-full bg-slate-300 mt-2 rounded" />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="text-sm font-medium text-gray-400">Description</label>
          <div className="animate-pulse h-12 w-full bg-slate-300 mt-2 rounded" />
        </div>
        <button className="bg-slate-600 text-white p-2 mt-4 rounded block w-fit ml-auto">Guardando...</button>
      </form>
    </>
  )
}
