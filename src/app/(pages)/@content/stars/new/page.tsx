
import { createStar, getStartCount, validateStar } from "@/utils/serverActions"

export const revalidate = 60

type Props = {}

export default function page({ }: Props) {

  const count = getStartCount()

  async function handleSubmit (formData : FormData) {
    "use server"
    const isValidStar = validateStar(formData)
    if (isValidStar != false) {
      createStar(isValidStar)
    }
  }

  return (
    <>
      <p className="text-center text-2xl font-bold">Current Star Count: {count}</p>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
          <input name="name" type="text" id="name" placeholder="Star Name" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
        </div>
        <div>
          <label htmlFor="constellation" className="text-sm font-medium text-gray-400">Constellation</label>
          <input name="constellation" type="text" id="constellation" placeholder="Star Constellation" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
        </div>
        <div>
          <label htmlFor="discoveredBy" className="text-sm font-medium text-gray-400">Discovered By</label>
          <input type="text" name="discoveredBy" id="discoveredBy" placeholder="Star Discovered By" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
        </div>
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="distance" className="text-sm font-medium text-gray-400">Distance</label>
            <input type="number" id="distance" name="distance" placeholder="Star Distance" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
          </div>
          <div className="w-full">
            <label htmlFor="discoveredYear" className="text-sm font-medium text-gray-400">Discovered Year</label>
            <input type="number" name="discoveryYear" id="discoveredYear" placeholder="Star Discovered Year" className="w-full p-2 border-2 border-gray-300 rounded-md outline-none" />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="text-sm font-medium text-gray-400">Description</label>
          <textarea id="description" name="description" placeholder="Star Description" className="w-full h-36 p-2 border-2 border-gray-300 rounded-md outline-none resize-none" />
        </div>
        <button className="bg-slate-600 text-white p-2 mt-4 rounded block w-fit ml-auto">guardar</button>
      </form>
    </>
  )
}