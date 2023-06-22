'use client' // Error components must be Client Components

import BlueButton from '@/app/(components)/BlueButton'
import CurlyContainer from '@/app/(components)/CurlyContainer'
import Divider from '@/app/(components)/Divider'
import Input from '@/app/(components)/Input'
import Title from '@/app/(components)/Title'
import { useEffect, useState } from 'react'

type Props = {
  error: Error
  reset: () => void
}

export default function NewStarError({ error, reset }: Props) {

  const [errors, setErrors] = useState({
    name: "",
    constellation: "",
    distance: "",
    discoveredBy: "",
    discoveryYear: "",
    description: ""
  })

  useEffect(() => {
    const errors = JSON.parse(error.message)
    const parsed = errors.reduce((acc: any, { path, message }: { path: string[], message: string }) => {
      acc[path[0]] = message
      return acc
    }, {})

    setErrors({ ...errors, ...parsed })
  }, [error])

  return (
    <>
      <header className="flex justify-between pt-[100px] items-center">
        <Title type="section">Nueva <span className="text-white !border-white" style={{ WebkitTextStroke: "1px white" }}>Estrella</span></Title>
        <CurlyContainer className="max-w-[600px] uppercase">
          <p>En esta pagina vas a poder agregar un nuevo cuerpo celeste. Si, me di cuenta despues de hacer todo el diseño que no es una estrella, pero ya fue. <span className="text-accent"> Agrega una estrella !!!</span></p>
        </CurlyContainer>
      </header>
      <Divider className="my-[40px]" />
      <section>
        <Input id="name" placeholder="Ej: Luna" label="Nombre" error={errors.name && errors.name} />
        <Input id="constellation" placeholder="Ej: 🌑 (es un emoji) " label="Imagen" error={errors.constellation && errors.constellation } />
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <Input id="distance" type="number" placeholder="Ej: 1000" label="Distancia" error={errors.distance && errors.distance}/>
          <Input id="discoveryYear" placeholder="Ej: 1989" label="Año de descubrimiento" type="number" error={errors.discoveryYear && errors.discoveryYear}/>
        </div>
        <Input id="discoveredBy" placeholder="Ej: Galileo" label="Descubridor/a" error={errors.discoveredBy && errors.discoveredBy}/>
        <Input id="description" placeholder="Descripcion Breve" label="Descripcion" as="textarea" containerClassName="w-full md:col-start-1 md:col-end-3" className="resize-none h-24" error={errors.description && errors.description}/>
        <BlueButton text="crear" className="w-fit md:col-start-2" onClick={reset} />
      </section>
    </>
  )
}