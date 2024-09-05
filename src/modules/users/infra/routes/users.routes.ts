import { FastifyInstance } from 'fastify'

import { createNewUser } from '../controllers/users.controller'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/', createNewUser)
}
