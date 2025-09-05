import postgres from "postgres";

const connectionString = process.env.DATABASE_URL as string;

export const sql = postgres(connectionString, {
  ssl: "require", // Supabase usually requires SSL
});