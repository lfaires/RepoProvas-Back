import { Response, Request } from "express";

export async function getAllInstructors(req: Request, res: Response){
    
    res.send([{id: 1, name: 'Luiz Fernando Moda Aires'}, {id: 2, name: 'Luiz Fernando Moda Aires'}])
    console.log("to na rota")
}