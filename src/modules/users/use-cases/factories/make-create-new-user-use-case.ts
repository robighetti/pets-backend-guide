import { PrismaUsersRepository } from '@modules/users/repositories/prisma/prisma-users-repository'
import { CreateUser } from '../../use-cases/create-user'
import { MailProvider } from '@shared/helper/mail'

export function makeCreateNewUserUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const mailProvider = new MailProvider()

  const createUser = new CreateUser(prismaUsersRepository, mailProvider)

  return createUser
}
