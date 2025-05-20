import { CreatePlaceService, GetAllService, GetServiceFromType, updatePlaceService } from "../services/PlaceServices.js"


export const CreatePlace = async (req,res) => {
    try {
        const { name,description,address,type,rating } = req.body

        const NovoLugar = await CreatePlaceService(name,description,address,type,rating)
    
        res.status(200).json(NovoLugar)

    } catch (error) {
        res.status(501).send("Erro ao registrar: " +error)
    }

}
export const GetPlaces = async (req,res) => {
    try {
        if(req.query.type){
            const placeType = req.query.type;
            
            const LugaresDoTipo = await GetServiceFromType(placeType)
        
            res.status(200).json(LugaresDoTipo)

        }else{
            const TodosOsLugares = await GetAllService()
        
            res.status(200).json(TodosOsLugares)
        }
    } catch (error) {
        res.status(501).send("Erro ao Mostar: " +error)
    }
}

export const UpdatePlace = async (req,res) => {
    try {
        const { name,description,address,type,rating } = req.body
        const id = Number(req.params.id);
        const LugarAtualizado = await updatePlaceService(id,name,description,address,type,rating)
    
        res.status(200).json(LugarAtualizado)

    } catch (error) {
        res.status(501).send("Erro ao registrar: " +error)
    }
}

export const DeletePlace = async (req,res) => {
    try {
        const id = Number(req.params.id);
        const LugarDeletado = await DeletePlaceService(id)
    
        res.status(200).json(LugarDeletado)

    } catch (error) {
        res.status(501).send("Erro ao registrar: " +error)
    }
}