import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository"

interface Isettingscreate {
    chat: boolean;
    username: string;
}

class SettingsServices {

    async create({ chat, username }: Isettingscreate) {

        const settingsRepository = getCustomRepository(SettingsRepository)

        //Select * from settings where username = *username* limit 1 ;
        const userAreadyExists = await settingsRepository.findOne({
            username
        });

        if (userAreadyExists) {
            throw new Error("user already exists!")
        }

        const settings = settingsRepository.create({
            chat,
            username,
        });

        await settingsRepository.save(settings);

        return settings;

    }
}


export { SettingsServices }