import { Guid } from 'guid-typescript'

export interface Contatos {
    id: Guid
    nome: string
    sobrenome: string
    tipo: string
    telefone: string
    email: string
}
