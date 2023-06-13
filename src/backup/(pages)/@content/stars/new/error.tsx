"use client"

type Props = {
  error: Error,
  reset: () => void
}

export default function error({ error, reset }: Props) {

  /* const parsedError = JSON.parse(error.message)
  const path = parsedError.path[0]
  const message = parsedError.message */
  console.log(error)
  return "Error"
  /* return (
    <>
      <p className="text-center text-2xl font-bold">Ups! There was an error 😥</p>
      <form>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
          <input name="name" type="text" id="name" placeholder="Star Name" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
          {path === "name" && <p className="text-red-500 text-sm">{message}</p>}
        </div>
        <div>
          <label htmlFor="constellation" className="text-sm font-medium text-gray-400">Constellation</label>
          <input name="constellation" type="text" id="constellation" placeholder="Star Constellation" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
          {path === "constellation" && <p className="text-red-500 text-sm">{message}</p>}
        </div>
        <div>
          <label htmlFor="discoveredBy" className="text-sm font-medium text-gray-400">Discovered By</label>
          <input type="text" name="discoveredBy" id="discoveredBy" placeholder="Star Discovered By" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
          {path === "discoveredBy" && <p className="text-red-500 text-sm">{message}</p>}
        </div>
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="distance" className="text-sm font-medium text-gray-400">Distance</label>
            <input type="number" id="distance" name="distance" placeholder="Star Distance" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
            {path === "distance" && <p className="text-red-500 text-sm">{message}</p>}
          </div>
          <div className="w-full">
            <label htmlFor="discoveredYear" className="text-sm font-medium text-gray-400">Discovered Year</label>
            <input type="number" name="discoveryYear" id="discoveredYear" placeholder="Star Discovered Year" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
            {path === "discoveryYear" && <p className="text-red-500 text-sm">{message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="description" className="text-sm font-medium text-gray-400">Description</label>
          <textarea id="description" name="description" placeholder="Star Description" className="w-full h-36 p-2 border-2 border-gray-300 rounded-md outline-none resize-none" />
          {path === "description" && <p className="text-red-500 text-sm">{message}</p>}
        </div>
        <button className="bg-slate-600 text-white p-2 mt-4 rounded block w-fit ml-auto" onClick={reset}>volver a intentar</button>
      </form>
    </>
  ) */
}