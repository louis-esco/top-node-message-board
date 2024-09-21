const db = require("../db/queries");

const displayMsgs = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
};

const displayMsgDetails = async (req, res) => {
  const message = await db.getMsgById(req.params.id);
  res.render("message", {
    message: message[0],
    index: Number(req.params.id),
  });
};

const displayForm = (req, res) => {
  res.render("form");
};

const getFormData = async (req, res) => {
  const msg = {
    text: req.body.text,
    user: req.body.author,
    added: new Date().toISOString(),
  };
  await db.addMsg(msg);
  res.redirect("/");
};

module.exports = { displayMsgs, displayMsgDetails, displayForm, getFormData };
