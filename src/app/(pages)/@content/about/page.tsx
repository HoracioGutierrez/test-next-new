"use client"
import { InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon, DoubleArrowDownIcon } from "@radix-ui/react-icons"
import { Metadata } from "next"
import Collapse from "rc-collapse"
import "rc-collapse/assets/index.css"
import motion from "./motion"

type Props = {}
export default function AboutContent({ }: Props) {

  return (
    <div className="h-full flex flex-col">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold text-center">{"${Mi Nombre}"}</h2>
      </header>

      <p className="mb-4">No. No me equivoque y deje una variable en el titulo mal escapada; creo que a este punto ya quedo claro que mi nombre es <span className="font-semibold">Horacio Gutierrez</span> asi que como también soy tan gracioso e ingenioso, hice ese chiste para dar a entender que domino el humor de programación (?)</p>
      <p className="mb-4">Te dejo el contenido collapsado asi no tenes que andar leyendo todo y podes hacer un <span className="font-semibold">TL;DR</span></p>
      <Collapse openMotion={motion} className="mb-6" accordion expandIcon={()=><DoubleArrowDownIcon />} destroyInactivePanel items={[
        {
          label: (
            <header className=" px-4 rounded">
              <h3 className="font-semibold flex items-center gap-2"> ¿Como empece?</h3>
            </header>
          ),
          children: (
            <div className="font-mono font-thin text-sm">
              <p className="mb-4 text-yellow-200">Empecé a estudiar programación en un instituto de esos que hoy son online pero hace 10 años atras, antes de la pandemia y cuando todavia nos daban libros fisicos con el contenido del curso porque si bien existia Google, la documentación de cada cosa nueva era medio inconseguible por lo menos para mi.</p>
              <p className="mb-4 text-yellow-200">Estuve trabajando en algun que otro lugar hasta que comence a dar clases 5 años despues para el mismo instituto donde aprendí. De un dia para el otro me empece a dedicar al rubro de la enseñanza y es hasta el dia de hoy que sigo un poco con un pie adentro, por ejemplo dando clases en el curso de React de <a href="https://www.coderhouse.com/" target="_blank" className="underline">Coderhouse</a> o siendo instructor para el curso de Desarrollador Web Fullstack en Javascript de <a href="https://practicum.com/" target="_blank" className="underline">Practicum by Yandex</a>.</p>
            </div>
          )
        },
        {
          label: (
            <header className=" px-4 rounded">
              <h3 className="font-semibold flex items-center gap-2">¿Por que me dedico a la enseñanza?</h3>
            </header>
          ),
          children: (
            <div className="font-mono font-thin text-sm">
              <p className="mb-4 text-yellow-200"> No tengo la mas minima idea, pero evidentemente me fue "bien" haciendolo, me hace sentir muy bien encontrar el punto justo para que alguien entienda algo que no entendia antes y en el proceso de intentarlo, me ayuda muchisimo a mi a entender mejor lo que sea que estoy enseñando; ya sea porque lo investigue a fondo para poder cubrir el tema o porque realmente me gusto y pase horas console.logueando un objeto y sus propiedades hasta endender por vista como funcionan los prototipos <span className="italic text-xs text-gray-500">(no, no es un chiste, historia real)</span> o maquetando un solo div en un body blanco para que haga una y cada una de las propiedades de css porque en ese momento no existia la "maquetación" como tal (ni flex, imaginate) y lo unico que tenia eran 10 paginas impresas que se titulaban "CSS y Divs"</p>
              <p className="mb-4 text-yellow-200">Hace un tiempo me entro un poco el nuevo miedo de quedarme atras solo por el hecho de estar dedicado a enseñar, que volví a intentar desarrollar alguna que otra funcionalidad como freelance para un par de clientes y lamentablemente no, no se me fue el miedo, al contrario, empezó a creecer de nuevo.</p>
            </div>
          )
        },
        {
          label: (
            <header className=" px-4 rounded">
              <h3 className="font-semibold flex items-center gap-2">¿Que hago en mi tiempo libre?</h3>
            </header>
          ),
          children: (
            <div className="font-mono font-thin text-sm">
              <p className="mb-4 text-yellow-200">Ultimamente el desarrollo, especialmente el web, estuvo dando muchos giros 360 pero por algun motivo segui apostando al desarrollo reactivo, por no decir que decidi creer en React y Javascript y por suerte creo que decidi bien. En estos ultimos meces se anunciaron los ultimos avances de integracion para Front y Back con Next.js y es por eso que decidí finalmente tener un portfolio oficial y al mismo tiempo hacerlo con las últimas de las tecnologias. Paso a contrar.</p>
            </div>
          )
        },
        {
          label: (
            <header className=" px-4 rounded">
              <h3 className="font-semibold flex items-center gap-2">My Stack (con lo que hice este portfolio tambien)</h3>
            </header>
          ),
          children: (
            <div className="font-mono font-thin text-sm">
              <p className="mb-4 text-yellow-200">Esta pagina fue creada con el siguiente stack : </p>
              <ul className="list-disc list-inside mb-4 text-yellow-200">
                <li>React</li>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>TailwindCSS</li>
                <li>Radix UI</li>
                <li>React Hook Form</li>
                <li>Yup</li>
                <li>Prisma</li>
                <li>MySQL</li>
                <li>Planet Scale</li>
              </ul>
            </div>
          )
        },
        {
          label: (
            <header className=" px-4 rounded">
              <h3 className="font-semibold flex items-center gap-2">Features</h3>
            </header>
          ),
          children: (
            <div className="font-mono font-thin text-sm">
              <p className="mb-4 text-yellow-200">Tambien, dentro del stack me decidí por integrar algun que otro nuevo feature de las ultimas versiones como por ejemplo : </p>
              <ul className="list-disc list-inside mb-4 text-yellow-200">
                <li>Static Site Generation (SSG) : Generar estaticamente un HTML para algunas rutas que no van a cambiar su contenido muy a menudo a travez del tiempo. De momento las paginas confirmadas en deploy con SSG son : "home","about","stars" y "comments"</li>
                <li>Dynamic Server Side Rendering (SSR) : Generar el codigo de un HTML del lado del servidor para una respuesta al cliente y renderizado mas rapido.</li>
                <li>Server Actions : Funciones que se ejecutan en el servidor y se pueden llamar desde el cliente. En este caso, la funcion que se ejecuta es la de enviar un comentario desde el formulario de comentarios o la de agregar una estrella, entre otras.</li>
                <li>Parallel Routes : Con esto genero el sidebar y contenido de cada pagina por separado y las intercepto en un layout en comun</li>
                <li>Opt-In Layouts  : Con esto genero un layout para los segmentos de pagina que sean distintos a solo una barra (en palabras "humanas", el home del sitio) y uno totalmente distinto para el home en si (noten que no tiene header. Ah les decia el chiste) </li>
                <li>Metadata,Favico,Icon,Robots y Sitemap : De momento solo estan configurados como archivos estaticos en el root para todo el sitio, pero la informacion de todo esto es generado dinamicamente</li>
              </ul>
            </div>
          )
        }
      ]}>
      </Collapse>
      <nav className="flex justify-center gap-4 shrink-0">
        <a target="_blank" href="https://www.instagram.com/horagutierrez"><InstagramLogoIcon width={30} height={30} /></a>
        <a target="_blank" href="https://www.linkedin.com/in/horacioegutierrez/"><LinkedInLogoIcon width={30} height={30} /></a>
        <a target="_blank" href="https://github.com/HoracioGutierrez"><GitHubLogoIcon width={30} height={30} /></a>
      </nav>
    </div>
  )
}