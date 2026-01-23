import { Request, Response } from "express";
import { prisma } from "../../lib/prisma.js"
import { Role } from "../../../generated/prisma/index.js"
import { error } from "node:console";
import bcrypt from "bcryptjs";
import validation from "../validate.js";

const users = {

    // readInfo: async function (req: Request, res: Response) {

    //     try {
    //         const user = await prisma.users.findMany()

    //         if (!user) {
    //             return res.status(500).send("User undefined")
    //         }

    //         console.log(user);
    //         res.send(user)
    //     } catch (error) {
    //         console.log(error)
    //         res.send("Error ao buscar" + error)
    //     }

    // },

    // createUser: async function (req: Request, res: Response) {
    //     try {
    //         const { nome, nascimento } = req.body

    //         const user = await prisma.users.create({
    //             data: {
    //                 nome,
    //                 nascimento, 
    //             }
    //         })

    //         res.send(user)

    //     } catch (error) {
    //         res.send(error)
    //     }

    // },

    // findInfo: async function (req: Request, res: Response) {


    //     try {
    //         const { id } = req.params

    //         if (typeof id !== "number") {
    //             return res.status(400).send("Id invalido")
    //         }

    //         const usuario = await prisma.users.findUnique({
    //             where: {
    //                 id
    //             }
    //         })

    //         if (!usuario) {
    //             res.status(404).send("Usuário não encontrado")
    //         }

    //         console.log(usuario);
    //         res.send(usuario)

    //     } catch (error) {
    //         res.send(error)
    //     }
    // },

    // updateUser: async function (req: Request, res: Response) {
    //     try {
    //         const { id } = req.params
    //         const { nome, nascimento } = req.body

    //         if (typeof id !== "number") {
    //             return res.status(400).send("Id Invalido")
    //         }

    //         const updateUser = await prisma.users.update({
    //             where: { id },
    //             data: { nascimento, nome }
    //         })

    //         if (!updateUser) {
    //             return res.status(404).send("Usuário não encontrado")
    //         }

    //         res.send(updateUser)
    //     } catch (error) {
    //         res.send(error)
    //     }

    // },

    // deleteUser: async function (req: Request, res: Response) {

    //     try {
    //         const { id } = req.params

    //         if (typeof id !== "number") {
    //             return res.status(400).send("Id inválido")
    //         }

    //         const deleteUser = await prisma.users.delete({
    //             where: { id }
    //         })

    //         if (!deleteUser) {
    //             return res.status(404).send("Usuário não encontrado")
    //         }

    //         res.send(deleteUser)
    //     } catch (error) {
    //         res.send(error)
    //     }


    // },

    registerUser: async function (req: Request, res: Response) {

        try {
            
            const {error, value} = validation.registerUser(req.body)
            if(error){
                return res.status(400).json({ error: error.details[0].message })
            }
            
            const { nome, cpf, nascimento, fone, email, password, role, crm, especialidade, setor } = value

            if (!Object.values(Role).includes(role)) {
                return res.status(400).json({ error: "Função inválida" })
            }

            if (role == Role.ADMIN) {
                return res.status(400).json({error: "Não é possivel criar ADMIN por cadastro público"})
            }

            if (role === Role.MEDICO && (!crm || !especialidade)) {
                return res.status(400).json({ error: "CRM ou Especialidade faltando" })
            }

            const verifyEmail = await prisma.users.findFirst({
                where: { email }
            })
            if (verifyEmail) {
                return res.status(400).json({
                    error: "Email already exists"
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
    },

    loginUser: async function (req: Request, res: Response) {
        try {
            const { email, password } = req.body

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

            res.json({
                message: "Usuário logado com sucesso",
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role
                }
            })

        } catch (error) {
            res.send(error)
        }
    },

    registerPant: async function (req: Request, res: Response) {

    }


}

export default users;