const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const displayMsgs = (req, res) => {
  res.render("index", { messages: messages });
};

const displayMsgDetails = (req, res) => {
  res.render("message", {
    message: messages[req.params.index],
    index: Number(req.params.index) + 1,
  });
};

const displayForm = (req, res) => {
  res.render("form");
};

const getFormData = (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = { displayMsgs, displayMsgDetails, displayForm, getFormData };
