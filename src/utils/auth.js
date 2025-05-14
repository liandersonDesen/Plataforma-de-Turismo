import bcrypt from 'bcrypt'
import  dotenv  from 'dotenv'
dotenv.config()
const salt_rounds = Number(process.env.SALT_ROUNDS);
export async function hashPassword(password) {

    return await bcrypt.hash(password,salt_rounds)
    
}
export async function comparar(senha_passada,senha_registrada) {
    return await bcrypt.compare(senha_passada,senha_registrada)
}