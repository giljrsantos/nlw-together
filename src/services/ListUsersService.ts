import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer"


class ListUsersService{

    async execute(){
        const usersRepositoris = getCustomRepository(UsersRepositories);

        const users = await usersRepositoris.find();

        return classToPlain(users);
    }

}

export { ListUsersService };