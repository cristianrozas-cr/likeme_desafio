const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "crenz",
    password: "12345",
    database: "likeme",
    allowExitOnIdle: true
});


const agregarPost = async (titulo, img, descripcion) => {
    try{
        const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)";
        const values = [titulo, img, descripcion];
        await pool.query(consulta, values)  //objeto result
    } catch (error){
        res.status(500).send(error)
    }
}

const obtenerPosts = async () => {
    try{
        const { rows } = await pool.query("SELECT * FROM posts");
        return rows;
    } catch (error) {
        res.status(500).send(error)
    }
}

const agregarLike = async (id) => {
    try{
        const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1"
        const values = [id]
        await pool.query(consulta, values)
    } catch (error){
        res.status(500).send(error)
    }
}

const eliminarPost = async (id) => {
    try{
        const consulta = "DELETE FROM posts WHERE id = $1"
        const values = [id]
        await pool.query(consulta, values)
    } catch (error){
        res.status(500).send(error)
    }
}

module.exports = { agregarPost, obtenerPosts, agregarLike, eliminarPost };