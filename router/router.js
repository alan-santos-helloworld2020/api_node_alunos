const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

var dataHoje = new Date();
var dia = dataHoje
  .toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  .toString();

router.get("/", async (req, res) => {
  const dados = await prisma.aluno.findMany();
  res.json(dados);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const dados = await prisma.aluno.findFirst({
    where: { id: Number(id) },
  });
  res.json(dados);
});

router.post("/", async (req, res) => {
  const { nome, idade, telefone, email } = req.body;
  const dados = await prisma.aluno.create({
    data: {
      data: dia,
      nome,
      idade,
      telefone,
      email,
    },
  });
  res.json(dados);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, idade, telefone, email } = req.body;
  const dados = await prisma.aluno.update({
    where: { id: Number(id) },
    data: {
      nome,
      idade,
      telefone,
      email,
    },
  });
  res.json(dados);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const dados = await prisma.aluno.delete({
    where: { id: Number(id) },
  });
  res.json(dados);
});


module.exports = router;