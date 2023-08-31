import { db } from "../config/database";

function getAllProducts() {
  return db.query("SELECT * FROM products");
}

export { getAllProducts };