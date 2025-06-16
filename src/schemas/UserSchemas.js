import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js"

export const RegisterUserSchema = z.object({
    name: z.string()
    .min(3,"O nome tem que ter pelo o menos 3 caracter.")
    .regex(/^[\p{L}]+$/u, "Digite apenas letras"),
    email: z.string().email("O email é inválido"),
    phone: z.string().refine(
        (phoneNumber)=>{
            try {
                return isValidPhoneNumber(phoneNumber)
            } catch (error) {
                return false
            }
        },
        "Número de telefone inválido"
    ),
    password: z.string().min(8,"A senha tem que ter pelo o menos 8 caracter")
})

export const LoginUserSchema = z.object({
    email: z.string().email("O email é inválido"),
    password: z.string().min(1,"Senha é obrigatorio")
})