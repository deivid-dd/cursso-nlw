import express from "express";

import "./database";

const app = express();

/** 
 * Get=Buscaur
 *post = criação
 * put = alteração
 * delete=deletar
 * patch=alterar uma informação espesifica
 */

app.get("/", (request, response) => {
    return response.send("ola NLW 05");

})


app.listen(3333, () => console.log("server is running on port 3333"));
