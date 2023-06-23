'use server'

import { revalidatePath } from 'next/cache'
import prisma from './prismaClient'
import { z } from 'zod'
import { cache } from 'react'
import { db } from './db'
import { StarSchema } from '../../drizzle/schema'

/* start migrated */
export const createStar = async (star: any) => {
  try {
    const validatedStar = validateStar(star)
    const values = {
      ...validatedStar,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const new_star = await db.insert(StarSchema).values(values).execute()
    revalidatePath('/stars')
    return new_star
  } catch (e) {
    return e
  }
}

export const validateStar = (formData: FormData) => {
  const name = formData.get('name') || ''
  const distance = Number(formData.get('distance')) || 0
  const description = formData.get('description') || ''
  const discoveryYear = Number(formData.get('discoveryYear')) || 0
  const discoveredBy = formData.get('discoveredBy') || ''
  const constellation = formData.get('constellation') || ''

  const star = {
    name,
    distance,
    description,
    discoveredBy,
    constellation,
    discoveryYear
  }

  try {
    const schema = z.object({
      name: z.string({ required_error: 'El nombre es obligatorio' }).min(3, 'El nombre debe contener por lo menos 3 caracteres').max(50, 'El nombre debe ser de menos de 50 caracteres').regex(/^[a-zA-Z0-1\s]*$/, 'El nombre solo puede contener letras , numeros y espacios'),
      distance: z.number({ required_error: 'La distancia es obligatoria' }).min(0, 'La distancia debe ser positiva').max(1000000, 'La distancia debe ser menos de 1000000'),
      description: z.string({ required_error: 'La descripcion es obligatoria' }).min(3, 'La descripcion debe contener por lo menos 3 caracteres').max(1500, 'Description must be less than 500 characters long'),
      discoveryYear: z.number({ required_error: 'El año de descubrimiento es obligatorio' }).min(0, 'Discovery year must be positive').max(3000, 'Discovery year must be less than 3000').positive('Discovery year must be positive'),
      discoveredBy: z.string({ required_error: 'El descubridor/a es obligatorio' }).min(3, 'Discoverer must be at least 3 characters long').max(50, 'Discoverer must be less than 50 characters long').regex(/^[a-zA-Z\s]*$/, 'Discoverer must only contain letters and spaces'),
      constellation: z.string({ required_error: 'El emoji(imagen) es obligatoria' }).min(1, 'Constellation must be at least 3 characters long').max(50, 'Constellation must be less than 50 characters long')
    })
    const parsed = schema.parse(star)
    return parsed
  } catch (error) {
    throw error
  }
}

/* end migrated */

export async function createComent (data: any) {
  try {
    const response = await prisma.comment.create({
      data: {
        comment: data.comment,
        author_name: data.author_name,
        avatar: data.avatar,
        profile_url: data.profile_url,
        rate: data.rate
      }
    })
    revalidatePath('/comments/new')
    revalidatePath('/comments')
    return response
  } catch (e) {
    throw new Error('Error creating comment')
  }
}

export const getStartCount = cache(async () => {
  const response = await prisma.star.count()
  return response
})
