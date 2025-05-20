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

export function authhenticateToken() {
    try {
    
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];
        
        const token = authHeader && authHeader.split(' ')[1];

        if (token == null) {
            return res.status(401).send("Não há Token");
        }

        jwt.verify(token, jwt_secret, (err, user) => {
            if (err) {
                return res.status(403).send("Token inválido");
            }
            req.user = user;
            next();
        })

    }
    
        
    } catch (error) {
        
    return res.status(400).json({
        messagem:"Erro de autenticação",
        erro:error
        })

    }
    
}
export function authorization(roles){
    return (req,res,next) => {
            if(req.user && roles.includes(req.user.role)){
                next();
            }else{
                return res.status(403).send("Acesso negado");
            }
        
    }
}