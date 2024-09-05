import { AppError } from '@shared/error/AppError'
import { PetsRepository } from '../repositories/pets-repository'

export class DeletePet {
  constructor(private petsRepository: PetsRepository) {}

  async execute(id: string) {
    if (!id) throw new AppError('Id must be provided')

    await this.petsRepository.deletePet(id)
  }
}
