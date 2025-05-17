import z from 'zod'

export const CreatePlaceSchema = z.object({
    name: z.string().min(3,"Minimo 3 Letras"),
    description: z.string(),
    address: z.string().min(1,"Endereço é obrigatório"),
    type: z.string().min(3,"Minimo 3 Letras"),
    rating: z.number().min(0,"minimo 0").max(5,"máximo 5")
})


export const UpdatePlaceSchema = z.object({
    name: z.string().min(3,"Minimo 3 Letras"),
    description: z.string(),
    address: z.string().min(1,"Endereço é obrigatório"),
    type: z.string().min(3,"Minimo 3 Letras"),
    rating: z.number().min(0,"minimo 0").max(5,"máximo 5")
})