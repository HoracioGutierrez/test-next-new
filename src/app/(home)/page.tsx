import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import NavigationBar from "../(components)/NavigationBar"
import Image from 'next/image';
import Avatar from "../(assets)/avatar.png"


export default function Home() {
  return (
    <>
      <Image src={Avatar} alt="Horacio Gutierrez Avatar" width={200} height={200} className="rounded-full mx-auto" />
      <h1 className="text-4xl font-bold text-white mb-12">Bienvenido!</h1>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-300 mb-8">Esta es una pagina en construccion. Supuestamente iba a terminar un portfolio funcional en Next.js peeeero justo sacaron una nueva version asi que nada, Jr de nuevo. Actualmente podrian navegar solo a traves de estas tres paginas</p>
        <div className="flex justify-center mb-8">
          <NavigationBar />
        </div>
        {/* <p className="text-gray-300 mb-2">Van a tener que tenerme paciencia porque momentaneamente sigo probando cosas nuevas como</p>
        <ul className="text-yellow-200 mb-8 w-fit m-auto flex">
          <li>rutas paralelas<span className="text-gray-300 mx-2">|</span></li>
          <li>rutas agrupatas<span className="text-gray-300 mx-2">|</span></li>
          <li>opt-out layouts<span className="text-gray-300 mx-2">|</span></li>
          <li>next actions</li>
        </ul> */}
        <p className="text-gray-300 mb-8">Si necesitas contacto directo conmigo por algun motivo te dejo ya estos links</p>
        <nav className="flex justify-center gap-4">
          <a target="_blank" className="text-gray-300 hover:text-yellow-200 transition-colors" href="https://www.instagram.com/horagutierrez"><InstagramLogoIcon width={30} height={30} /></a>
          <a target="_blank" className="text-gray-300 hover:text-yellow-200 transition-colors" href="https://www.linkedin.com/in/horacioegutierrez/"><LinkedInLogoIcon width={30} height={30} /></a>
          <a target="_blank" className="text-gray-300 hover:text-yellow-200 transition-colors" href="https://github.com/HoracioGutierrez"><GitHubLogoIcon width={30} height={30} /></a>
        </nav>
      </div>
    </>
  )
}