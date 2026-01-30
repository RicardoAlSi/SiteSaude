import { Request, Response } from "express";
import { prisma } from "../../lib/prisma.js"
import { Role } from "../../../generated/prisma/index.js"
import bcrypt from "bcryptjs";
import {lgUserJoi, regUserJoi} from "../validate.js";
import jwt from "jsonwebtoken"



export async function registerUser(req: Request, res: Response) {

    if (req.user?.role == Role.ADMIN) {
        try {

            const { error, value } = regUserJoi(req.body)
            if (error) {
                return res.status(400).json({ error: error.message })
            }

            const { nome, cpf, nascimento, fone, email, password, role, crm, especialidade, setor } = value

            if (!Object.values(Role).includes(role)) {
                return res.status(400).json({ error: "Função inválida" })
            }

            if (role == Role.ADMIN) {
                return res.status(400).json({ error: "Não é possivel criar ADMIN por cadastro público" })
            }

            if (role === Role.MEDICO && (!crm || !especialidade)) {
                return res.status(400).json({ error: "CRM ou Especialidade faltando" })
            }

            const verifyEmail = await prisma.users.findFirst({
                where: { email }
            })
            if (verifyEmail) {
                return res.status(400).json({
                    error: "Email já cadastrado"
                })
            }

            const userCreated = await prisma.users.create({
                data: {
                    nome,
                    cpf,
                    nascimento: new Date(nascimento),
                    fone,
                    email,
                    passwordHash: bcrypt.hashSync(password, 10),
                    role,
                    medico: role === "MEDICO"
                        ? {
                            create: {
                                crm,
                                especialidade
                            }
                        } : undefined,
                    atendente: role === "ATENDENTE"
                        ? {
                            create: {
                                setor
                            }

                        } : undefined
                }
            })

            res.send("Usuário criado: " + userCreated)

        } catch (error) {
            res.status(400).send(error)
        }
    } else {
        res.status(500).json({ error: "Apenas administradores podem cadastrar Atendentes e Medicos " })
    }
}

export async function loginUser(req: Request, res: Response) {

    try {
        const { error, value } = lgUserJoi(req.body)
        if (error) {
            return res.status(400).json({ error: error.message, "a": "asdasdas" })
        }

        const { email, password } = value

        if (!email || !password) {
            return res.status(400).json({ error: "Email ou senha incorretos" })
        }

        const user = await prisma.users.findFirst({
            where: {
                email
            },
        })

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" })
        }

        const passwordMatch = bcrypt.compareSync(password, user.passwordHash)

        if (!passwordMatch) {
            return res.status(400).json({ error: "Email ou senha Incorretos" })
        }

        const secretKey = process.env.JWT_TOKEN

        if (!secretKey) {
            return res.status(400).json({ error: "JWT_TOKEN não definido" })
        }

        const tokenUser = jwt.sign({ id: user.id, role: user.role }, secretKey, { expiresIn: "1h" })

        res.cookie("access_token", tokenUser, {
            httpOnly: true,
            sameSite: "strict",
            secure: false //Alterar quando for para produção
        })
        res.json({
            message: "Usuário logado com sucesso",
            user: {
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        res.send(error)
    }
}



