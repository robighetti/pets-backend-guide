import { FastifyInstance } from 'fastify'

import { ensureAuthentication } from '@shared/middlewares/ensure-authentication'

import {
  createPet,
  updatePet,
  deletePet,
  getAllPets,
  getOnePet,
} from '../controllers/pets.controller'

export async function petsRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      onRequest: ensureAuthentication,
    },
    getAllPets,
  )

  app.get(
    '/:id',
    {
      onRequest: ensureAuthentication,
    },
    getOnePet,
  )

  app.post(
    '/',
    {
      onRequest: ensureAuthentication,
    },
    createPet,
  )

  app.put(
    '/:id',
    {
      onRequest: ensureAuthentication,
    },
    updatePet,
  )

  app.delete(
    '/:id',
    {
      onRequest: ensureAuthentication,
    },
    deletePet,
  )
}
