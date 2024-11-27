import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString = "postgresql://bookstore_5cov_user:EjoiZ9okrPJpH5ce695nVSPwFHcCMvYK@dpg-ct3q4f56l47c73f43a7g-a.oregon-postgres.render.com/bookstore_5cov"

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
