import { PrismaPetsRepository } from '@modules/pets/repositories/prisma/prisma-pets-repository'
import { DeletePet } from '../deletePet'

export function makeDeletePetUseCase() {
  const prismaRepository = new PrismaPetsRepository()

  const deletePet = new DeletePet(prismaRepository)

  return deletePet
}
