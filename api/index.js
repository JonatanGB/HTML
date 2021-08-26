







        // 1- npm init -y
        // 2- npm i express  // instala express
        const { response } = require("express");
        const express = require("express");
        const app = express();
        const PORT = 3000;

        //importando rotas
        const user_routes = require("./routes/user_routes");


        //middlewares
        app.use(express.json());

        //definindo rotas
        app.use("/users", user_routes)


        app.get("/", (request, reponse) => {
            reponse.send("Hello World!")
        });

        app.post("/", (request, response) => {
            response.send("Método post");
        });

        app.put("/", (request, response) => {
            response.send("Método put");
        });

        app.delete("/", (request, response) => {
            response.send("Método delete");
        });

        // BD









        app.listen(PORT, () => console.log("O servidor está rodando"));
        //npm run dev