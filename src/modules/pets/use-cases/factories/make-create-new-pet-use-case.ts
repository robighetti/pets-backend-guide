import { CreateNewPet } from '../createNewPet'
import { PrismaPetsRepository } from '@modules/pets/repositories/prisma/prisma-pets-repository'

export function makeCreateNewPetUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository()

  const createNewPet = new CreateNewPet(prismaPetsRepository)

  return createNewPet
}
