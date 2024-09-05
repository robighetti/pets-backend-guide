import { PrismaPetsRepository } from '@modules/pets/repositories/prisma/prisma-pets-repository'
import { GetOnePet } from '../getOnePet'

export function makeGetOnePetsUseCase() {
  const prismaRepository = new PrismaPetsRepository()

  const getOnePet = new GetOnePet(prismaRepository)

  return getOnePet
}
