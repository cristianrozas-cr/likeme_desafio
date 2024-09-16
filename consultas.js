const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "crenz",
    password: "12345",
    database: "likeme",
    allowExitOnIdle: true
});


const agregarPost = async (titulo, img, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)";
    const values = [titulo, img, descripcion];
    await pool.query(consulta, values)  //objeto result
    // console.log(result)
}

const obtenerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
}

const agregarLike = async (id) => {
    const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1"
    const values = [id]
    await pool.query(consulta, values)
}

const eliminarPost = async (id) => {
    const consulta = "DELETE FROM posts WHERE id = $1"
    const values = [id]
    await pool.query(consulta, values)
}

module.exports = { agregarPost, obtenerPosts, agregarLike, eliminarPost };