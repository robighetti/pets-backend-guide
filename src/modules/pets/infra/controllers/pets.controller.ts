import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'

import { makeCreateNewPetUseCase } from '@modules/pets/use-cases/factories/make-create-new-pet-use-case'
import { makeUpdatePetUseCase } from '@modules/pets/use-cases/factories/make-update-pet-use-case'
import { makeDeletePetUseCase } from '@modules/pets/use-cases/factories/make-delete-pet-use-case'
import { makeGetAllPetsUseCase } from '@modules/pets/use-cases/factories/make-get-all-pets-use-case'
import { makeGetOnePetsUseCase } from '@modules/pets/use-cases/factories/make-get-one-pets-use-case'

export async function createPet(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    name: z.string(),
    race: z.string(),
    age: z.number(),
  })

  const { name, race, age } = schema.parse(request.body)

  const createPet = makeCreateNewPetUseCase()

  const pet = await createPet.execute({ name, race, age })

  return reply.status(200).send(pet)
}

export async function updatePet(request: FastifyRequest, reply: FastifyReply) {
  const idSchema = z.object({
    id: z.string(),
  })

  const bodySchema = z.object({
    name: z.string(),
    race: z.string(),
    age: z.number(),
  })

  const { name, race, age } = bodySchema.parse(request.body)
  const { id } = idSchema.parse(request.params)

  const updatePet = makeUpdatePetUseCase()

  const updatedPet = await updatePet.execute({ id, name, race, age })

  return reply.status(200).send(updatedPet)
}

export async function deletePet(request: FastifyRequest, reply: FastifyReply) {
  const idSchema = z.object({
    id: z.string(),
  })

  const { id } = idSchema.parse(request.params)

  const deletePet = makeDeletePetUseCase()

  await deletePet.execute(id)

  return reply.status(200).send('Pet deleted')
}

export async function getAllPets(request: FastifyRequest, reply: FastifyReply) {
  const getAllPets = makeGetAllPetsUseCase()

  const pets = await getAllPets.execute()
  return reply.status(200).send(pets)
}

export async function getOnePet(request: FastifyRequest, reply: FastifyReply) {
  const idSchema = z.object({
    id: z.string(),
  })

  const { id } = idSchema.parse(request.params)

  const getOnePet = makeGetOnePetsUseCase()

  const pet = await getOnePet.execute(id)

  return reply.status(200).send(pet)
}
