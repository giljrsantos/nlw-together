import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";


class ListTagsServices{

    async execute(){
        const tagsRepositoris = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositoris.find();

        return classToPlain(tags);
    }

}

export { ListTagsServices };