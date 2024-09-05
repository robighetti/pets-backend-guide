import { Pets } from '@prisma/client'

export type PetDataProps = {
  id?: string
  name: string
  race: string
  age: number
}

export interface PetsRepository {
  findAllPets(): Promise<Pets[] | null>
  findOnePet(id: string): Promise<Pets | null>
  createPet(data: PetDataProps): Promise<Pets>
  updatePet(data: PetDataProps): Promise<Pets>
  deletePet(id: string): Promise<void>
}
