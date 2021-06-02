import { Router } from "express"
import { SettingsContoller } from "./controller/settingsControlle";


const routes = Router();

const settingsContoller = new SettingsContoller();

routes.post("/settings", settingsContoller.create);



export { routes };