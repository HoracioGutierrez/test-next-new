import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import NavigationBar from "../(components)/NavigationBar"

 
export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-12">Bienvenido!</h1>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-300 mb-8">Esta es una pagina en construccion. Supuestamente iba a terminar un portfolio funcional en Next.js peeeero justo sacaron una nueva version asi que nada, Jr de nuevo.</p>
        <p className="text-gray-300 mb-2" >Actualmente podrian navegar solo a traves de estas dos paginas</p>
        <div className="flex justify-center mb-8">
          <NavigationBar/>
        </div>
        <p className="text-gray-300 mb-2">Van a tener que tenerme paciencia porque momentaneamente sigo probando cosas nuevas como</p>
        <ul className="text-yellow-200 mb-8 list-disc w-fit m-auto">
          <li>rutas paralelas</li>
          <li>rutas agrupatas</li>
          <li>opt-out layouts</li>
          <li>next actions</li>
        </ul>
        <p className="text-gray-300 mb-8">Si necesitas contacto directo conmigo por algun motivo te dejo ya estos links</p>
        <nav className="flex justify-center gap-4">
          <a target="_blank" className="text-gray-300" href="https://www.instagram.com/horagutierrez"><InstagramLogoIcon width={30} height={30} /></a>
          <a target="_blank" className="text-gray-300" href="https://www.linkedin.com/in/horacioegutierrez/"><LinkedInLogoIcon width={30} height={30} /></a>
          <a target="_blank" className="text-gray-300" href="https://github.com/HoracioGutierrez"><GitHubLogoIcon width={30} height={30} /></a>
        </nav>
      </div>
    </>
  )
}