import { PrismaPetsRepository } from '@modules/pets/repositories/prisma/prisma-pets-repository'
import { UpdatePet } from '../updatePet'

export function makeUpdatePetUseCase() {
  const prismaRepository = new PrismaPetsRepository()

  const updatePet = new UpdatePet(prismaRepository)

  return updatePet
}
