import { PrismaPetsRepository } from '@modules/pets/repositories/prisma/prisma-pets-repository'
import { GetAllPets } from '../getAllPets'

export function makeGetAllPetsUseCase() {
  const prismaRepository = new PrismaPetsRepository()

  const getAllPets = new GetAllPets(prismaRepository)

  return getAllPets
}
