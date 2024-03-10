import { DBInterface, Item } from "./f4/db";

interface Passwords extends Item {
  name: string;
  user: string;
  pass: string;
}

const db = new DBInterface("data.sqlite");
const config = db.openTable<Passwords>("config");

export { Passwords, db, config };