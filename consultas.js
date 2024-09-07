const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "crenz",
    password: "12345",
    database: "likeme",
    allowExitOnIdle: true
});


const agregarPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)";
    const values = [titulo, url, descripcion];
    await pool.query(consulta, values)  //objeto result
    // console.log(result)
}

const obtenerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
}

module.exports = { agregarPost, obtenerPosts };