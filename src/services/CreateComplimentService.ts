import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService{

    async execute({ tag_id, user_sender, user_receiver, message}: IComplimentRequest){

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);



        if(user_receiver === user_sender){
            throw new Error("Incorrect User Receiver");
        }

        // Verificando se o usuario existe
        const userReceiverExists = await usersRepositories.findOne(user_receiver);        

        if(!userReceiverExists){
            throw new Error("User Receiver does not exists");
        }
        //Criando Elogio
        const compliment = await complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;

    }

}

export { CreateComplimentService };