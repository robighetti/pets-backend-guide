import { v4 as uuid } from 'uuid'

import { AppError } from '@shared/error/AppError'
import { UsersRepository } from '../repositories/users-repository'
import { generateHashPassword } from '@shared/helper/encrypt'
import { IMailProvider } from '@shared/helper/mail/IMailProvider'
import { welcome } from '@shared/helper/mail/templates/welcome'
import { env } from '@shared/env'

interface Props {
  name: string
  email: string
  whatsapp: string
}

export class CreateUser {
  constructor(
    private usersRepository: UsersRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: Props) {
    const userExists = await this.usersRepository.findByEmail(data.email)
    if (userExists) {
      throw new AppError('Email already exists', 400)
    }

    const payload = {
      ...data,
      password: await generateHashPassword('P@ssW0rd'),
      avatar: '',
    }

    const user = await this.usersRepository.createUsers(payload)

    const token = uuid()

    const html = welcome(`${env.FRONTEND_URL}/reset-password/${token}`)

    await this.usersRepository.saveTokenInDb(token, user.id)

    return this.mailProvider.sendMail({
      to: data.email,
      subject: 'Bem vindo ao pets',
      template: html,
    })
  }
}
