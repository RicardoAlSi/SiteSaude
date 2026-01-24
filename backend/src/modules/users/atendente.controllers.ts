import { Request, Response } from "express"
import validation from "../validate.js"
import { prisma } from "../../lib/prisma.js"


async function registerPant(req: Request, res: Response) {
        try {
            const { error, value } = validation.registerPantient(req.body)

            if (error) {
                return res.status(400).json({ error: error.message })
            }

            const {nome, cpf, cartaoSus, nascimento, email, fone } = value

            const verifyCpf = await prisma.patient.findFirst({
                where:{cpf}
            })
            if(verifyCpf){
                return res.status(400).json({error:"CPF já cadastrado"})
            }

            const patientCreated = await prisma.patient.create({
                data: {
                    nome,
                    cpf,
                    cartaoSus,
                    nascimento,
                    email,
                    fone
                }
            })

            res.json({
                message: "Paciente criado com sucesso",
                patientCreated
            })


        } catch (error) {
            return res.status(400).json({error})
        }
    }

export default registerPant 