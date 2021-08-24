







        // 1- npm init -y
        // 2- npm i express  // instala express
        const { response } = require("express");
        const express = require("express");
        const app = express();
        const PORT = 3000;

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
        const users = [
            { id: 1, name: "Pedro", email: "pedro@email.com" },
            { id: 2, name: "João", email: "joao@email.com" },
            { id: 3, name: "Marcos", email: "marcos@email.com" },
            ];

        // rotas de usuario "/users"

        app.get("/users", (req, res) => {
            res.json(users);
        });

        app.get("/users/:id", (req, res) => {
            const userId = req.params.id;
            
             console.log(userId);
            
             const user = users.find(user => user.id == user_id);
            
             if (!user) {
                res.status(404).json({ message: "User not found!" });
            }
            
             res.json(user);
            });

        app.get("/users", (req, res) => {
            
        });

        app.get("/users", (req, res) => {
            
        });

        app.get("/users", (req, res) => {
            
        });

        app.listen(PORT, () => console.log("O servidor está rodando"));
