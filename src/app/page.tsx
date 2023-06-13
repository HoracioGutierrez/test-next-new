import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { Chakra_Petch } from 'next/font/google'

const chakra = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"]
})

type Props = {}

export default function HomePage({ }: Props) {
  return (
    <>
      <h2 className='uppercase text-white flex items-center gap-4 text-2xl mt-[100px]'>
        <span className='w-2 h-2 bg-white block'></span>
        i build software solutions
      </h2>
      <div className='flex flex-col gap-4 my-4'>
        <div className='border border-dashed border-[rgba(0,126,255,0.5)]'></div>
        <div className='border border-dashed border-[rgba(0,126,255,0.5)]'></div>
      </div>
      <h1 className={`${chakra.className} font-bold text-transparent uppercase main-title text-9xl`}>horacio gutierrez</h1>
      <div className='w-fit flex flex-col justify-center'>

        <h2 className={`${chakra.className} text-white flex items-center uppercase text-9xl font-bold relative justify-center`}>
          
          <span className={`${chakra.className} text-[#007eff] next flex items-center uppercase text-3xl font-bold absolute left-0 top-3`}>next level</span>
          at <ArrowRightIcon width={128} height={128} /> web  <ArrowLeftIcon width={128} height={128} />

        </h2>

        <h2 className={`${chakra.className} text-white flex items-center uppercase text-9xl font-bold`}>
          <span className='hashtag text-transparent'>#</span>
          development
        </h2>
      </div>
      <div className='flex flex-col gap-4 my-4'>
        <div className='border border-dashed border-[rgba(0,126,255,0.5)]'></div>
        <div className='border border-dashed border-[rgba(0,126,255,0.5)]'></div>
      </div>
      <section className='max-w-lg ml-auto text-xl mt-10 relative'>
        <div className={`${chakra.className} absolute text-transparent efecto text-9xl left-[-70px]`}>{`{`}</div>
        <p className='uppercase text-white'>esta es una <span className='text-[#007eff]'>pagina en construccion</span>. <br /> supuestamente a terminar un <span className='text-[#007eff]'>portfolio funcional en next.js</span> peeeero justo pasaron cositas...</p>
        <div className={`${chakra.className} absolute text-transparent efecto text-9xl right-[0px] top-0`}>{`}`}</div>
      </section>
    </>
  )
}