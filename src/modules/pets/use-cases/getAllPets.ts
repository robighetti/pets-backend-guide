import { PetsRepository } from '../repositories/pets-repository'

export class GetAllPets {
  constructor(private petsRepository: PetsRepository) {}

  async execute() {
    return this.petsRepository.findAllPets()
  }
}
