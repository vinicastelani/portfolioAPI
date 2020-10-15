const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "erro" });
  }
});

router.put("/user/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  if (!user) return res.status(404).send({ error: "Usuário não encontrado" });
  res.status(200).send({ message: "Sessão atualizada", user: req.body });
});

router.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(400).send({ error: "Usuário não encontrado" });
  res.status(200).send({ user });
});

router.get("/teste", (req, res) => {
  try {
    res.send("ON");
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = (app) => app.use("/session", router);
