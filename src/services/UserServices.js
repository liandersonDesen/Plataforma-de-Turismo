import { PrismaClient } from "@prisma/client";
import { comparar, hashPassword } from "../utils/auth.js";

const prisma = new PrismaClient()

export const CreateUser = async (name,email,phone,password) => {
    const passwordHased= await hashPassword(password)
    return await prisma.user.create({
        data:{
            name,
            email,
            phone,
            password:passwordHased
        }
    })
}

export const logarUsuario = async (email,password) =>{
    const user = await prisma.user.findUnique({where:{email}})
        if(user){
         const compared= await comparar(password,user.password)
                if (compared) {
                    return {
                        acesso:"liberado",          
                        name:user.name,
                        email:user.email,
                    }
                }else{
                    return 'senha ou email incorreto'
                }
        }else{
            return 'senha ou email incorreto'
        }
}