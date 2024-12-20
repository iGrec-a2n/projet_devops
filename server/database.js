const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "pnhgH206",
    host: "localhost",
    port: 5433
})


pool.query("CREATE DATABASE Liste_de_courses").then((Response) => {
    console.log("DATABASE CREATED")
    console.log(Response)
}) .catch((err) => {
    console.log(err)
});

module.exports = pool;

