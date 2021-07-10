import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({ email, password}: IAuthenticateRequest){

        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect");
        }
        //verficar se senha esta correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }
        //gerar token
        const token = sign(
            {
                email: user.email
            },
                "edeadda2c034ba3752fcdc2c3f6b5034", 
            {
                subject: user.id, 
                expiresIn: "1d"
            }
        );

        return token;

    }

}

export { AuthenticateUserService };