
export interface Team {
    team: {
        code: string,
        name: string
    }
    type: string
    user?: {
        nombre: string,
        apellido: string
    },
    _id?: string
}