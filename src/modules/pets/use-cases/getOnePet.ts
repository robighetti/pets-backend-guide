import { AppError } from '@shared/error/AppError'
import { PetsRepository } from '../repositories/pets-repository'

export class GetOnePet {
  constructor(private petsRepository: PetsRepository) {}

  async execute(id: string) {
    if (!id) throw new AppError('Id must be provided')

    return this.petsRepository.findOnePet(id)
  }
}
