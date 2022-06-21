import { Request } from "express"

export type LoginInfo = {
  username: string,
  password: string,
}

export type UserPayload = {
  username: string,
  admin: boolean,
}

export interface RequestCustomTypes extends Request {
  token: string,
  user: UserPayload,
}

export interface User {
  id: number,
  nome: string,
  email: string,
  senha: string,
}

