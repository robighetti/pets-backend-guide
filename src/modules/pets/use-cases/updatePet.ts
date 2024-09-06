import { AppError } from '@shared/error/AppError'
import { PetDataProps, PetsRepository } from '../repositories/pets-repository'

export class UpdatePet {
  constructor(private petsRepository: PetsRepository) {}

  async execute(data: PetDataProps) {
    if (!data.id) throw new AppError('Id must be provided')

    const pet = await this.petsRepository.findOnePet(data.id)

    if (!pet) throw new AppError('Pet not found')

    const updatedPet = await this.petsRepository.updatePet(data)

    return updatedPet
  }
}
