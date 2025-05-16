import bcrypt from 'bcrypt'
import  dotenv  from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

const salt_rounds = Number(process.env.SALT_ROUNDS);
const jwt_secret = process.env.JWT_SECRET;

export async function hashPassword(password) {

    return await bcrypt.hash(password,salt_rounds)
    
}
export async function comparar(senha_passada,senha_registrada) {

    return await bcrypt.compare(senha_passada,senha_registrada)

}

export function gerarToken(user) {

    return jwt.sign(
        {id:user.id,email:user.email,role:user.role},
        jwt_secret,
        {expiresIn:'1h'}
    )
    
}

