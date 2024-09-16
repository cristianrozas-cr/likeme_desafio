//Importamos modulos
const express = require('express');
const cors = require('cors');
const { agregarPost, obtenerPosts, agregarLike, eliminarPost } = require("./consultas");

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
    const { titulo, img, descripcion } = req.body
    await agregarPost(titulo, img, descripcion)
    res.send("Se agregó un nuevo post")
})

app.put("/posts/like/:id", async (req, res) => {
    const { id } = req.params;
    await agregarLike(id)
    res.send("Se agregó un like")
})

app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;
    await eliminarPost(id)
    res.send("Se eliminó el post correctamente")
})
