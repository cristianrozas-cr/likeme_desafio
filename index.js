//Importamos modulos
const express = require('express');
const cors = require('cors');
const { agregarPost, obtenerPosts} = require("./consultas");

//Instanciamos express
const app = express();

//Levantamos el servidor
app.listen(3000, console.log("Puerto encendido en el 3000"));

//Middleware
app.use(express.json());
app.use(cors());

//Rutas
app.get("/posts", async (req, res) => {
    const posts = await obtenerPosts()
    res.json(posts);
})

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body
    await agregarPost(titulo, url, descripcion)
    res.send("Se agregó un nuevo post")
})
