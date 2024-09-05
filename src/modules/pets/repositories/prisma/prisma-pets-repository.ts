import { prisma } from '@config/prisma'

import { PetsRepository, PetDataProps } from '../pets-repository'

export class PrismaPetsRepository implements PetsRepository {
  async findAllPets() {
    return prisma.pets.findMany()
  }

  async findOnePet(id: string) {
    return prisma.pets.findUnique({
      where: {
        id,
      },
    })
  }

  async createPet(data: PetDataProps) {
    return prisma.pets.create({
      data,
    })
  }

  async updatePet(data: PetDataProps) {
    return prisma.pets.update({
      data,
      where: {
        id: data.id,
      },
    })
  }

  async deletePet(id: string) {
    await prisma.pets.delete({ where: { id } })
  }
}
