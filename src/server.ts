import express from "express"

import "./database";
import { routes } from "./Routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
    console.log("sever runing in port 3333")
})