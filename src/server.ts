import express from "express"

import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 06"
    });
});

app.post("/", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso!" })
})

app.listen(3333, () => {
    console.log("sever runing in port 3333")
})