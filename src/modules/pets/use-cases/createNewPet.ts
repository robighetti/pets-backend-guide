import { PetDataProps, PetsRepository } from '../repositories/pets-repository'

export class CreateNewPet {
  constructor(private petsRepository: PetsRepository) {}

  async execute(data: PetDataProps) {
    return this.petsRepository.createPet(data)
  }
}
