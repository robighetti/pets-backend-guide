import { FastifyRequest, FastifyReply } from 'fastify'

import { z } from 'zod'

import { makeCreateNewUserUseCase } from '@modules/users/use-cases/factories/make-create-new-user-use-case'

export async function createNewUser(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    whatsapp: z.string(),
  })

  const { name, email, whatsapp } = schema.parse(request.body)

  const createUser = makeCreateNewUserUseCase()

  const user = await createUser.execute({ name, email, whatsapp })

  return reply.status(200).send(user)
}
