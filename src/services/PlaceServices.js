import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const CreatePlaceService = async (name,description,address,type,rating)=>{
    return await prisma.place.create({
        data:{
            name,
            description,
            address,
            type,
            rating
        }
    })
}
export const GetAllService = async ()=>{
    return await prisma.place.findMany()
}

export const GetServiceFromType = async (type)=>{
    return await prisma.place.findMany({where:{type}})
}


export const updatePlaceService = async (id,name,description,address,type,rating)=>{
    return await prisma.place.update({
        where:{id},
        data:{
            name,
            description,
            address,
            type,
            rating
        }
    })
}


export const DeletePlaceService = async (id)=>{
    return await prisma.place.delete({where:id})
}