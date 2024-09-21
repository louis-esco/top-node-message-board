#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR,
  "user" VARCHAR,
  added DATE
);

INSERT INTO messages (text, "user", added) 
VALUES
  ('Hi I''m message one', 'louis', '1996-11-10'),
  ('Message two here', 'juliette', '1995-11-10'),
  ('Third message in the house', 'seb', '1995-11-19');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
