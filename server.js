import express from "express";
import pkg from "pg";

const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 3000;

const student = {
  nombre: process.env.STUDENT_NAME || "Milton Azareel Cuadra Mezquita",
  expediente: process.env.STUDENT_EXPEDIENTE || "26114",
  codigo: process.env.STUDENT_CODIGO || "CM22i04001"
};

let pool = null;
if (
  process.env.POSTGRES_HOST &&
  process.env.POSTGRES_DB &&
  process.env.POSTGRES_USER &&
  process.env.POSTGRES_PASSWORD
) {
  pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  });
}

app.get("/", (req, res) => {
  res.json({
    estudiante: student,
    servicio: "API Parcial Docker",
    mensaje: "Entrega del Parcial 2 lista"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/db-check", async (req, res) => {
  if (!pool) {
    return res.status(200).json({ db: "no-configurada" });
  }
  try {
    const r = await pool.query("SELECT NOW() as now");
    res.json({ db: "ok", now: r.rows[0].now });
  } catch (err) {
    res.status(500).json({ db: "error", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`API escuchando en puerto ${PORT}`);
});
