const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMsgById(id) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE id = ${id}`);
  return rows;
}

async function addMsg(msg) {
  await pool.query(
    `INSERT INTO messages (text, "user", added) VALUES ('${msg.text}', '${msg.user}', '${msg.added}')`
  );
}

module.exports = { getAllMessages, getMsgById, addMsg };
