import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

function authToken(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers.authorization //retorna Bearer + token
    const secretKey = process.env.JWT_TOKEN

    if(!secretKey){
        return res.status(400).json({error: "JWT_TOKEN não definido"})
    }

    if (!authHeader) {
        return res.status(400).json({ error: "Acesso negado" })
    }

    const [, token] = authHeader.split(" ") //Separa o Bearer e fica só o token

    try {
        const userVerifed = jwt.verify(token, secretKey)
        next()
    }catch(error){
        return res.status(400).json({ error: "Token inválido" })
    }
}



export default authToken