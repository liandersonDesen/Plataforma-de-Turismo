import { CreateUser, logarUsuario } from "../services/UserServices.js"

export const RegisterUser = async (req,res)=>{
    try {
        const { name,email,phone,password } = req.body

        const NovoUsuario = await CreateUser(name,email,phone,password)

        res.status(200).send("Usuario Registrado com sucesso")
    } catch (error) {
        res.status(501).send("Erro ao registrar: " +error)
    }
}

export const LoginUser = async (req,res) =>{
    try {
        const { email, password } = req.body

        const UserLogado = await logarUsuario(email,password)

        if(typeof UserLogado == 'object'){
            res.status(200).json(UserLogado)
        }else{
            res.status(404).send(UserLogado)
        }
    } catch (error) {
        res.status(500).send("Erro ao fazer login"+ error.message)
    }
}