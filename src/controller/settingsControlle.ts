import { Request, Response } from "express";
import { SettingsServices } from "../services/settingsServices"

class SettingsContoller {

    async create(Request: Request, response: Response) {
        const { chat, username } = Request.body;

        const settingsServices = new SettingsServices();

        try {
            const settings = await settingsServices.create({ chat, username });

            return response.json(settings);
        } catch (err) {
            return response.status(400).json({
                message: err.message,
            })
        }

    }
}


export { SettingsContoller };