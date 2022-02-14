Rio da Janeiro 12/02/2022

Tecnologias:
nodejs v16
prisma
express

Descrição:
Api rest para cadastro de alunos

Instruções de Uso:

a) Na raiz do projeto abra o terminal e rode o comando
$ npm install

b) Crie e configure um arquivo .env na raiz do projeto, conforme o modelo .env.exemplo,
 informando os dados para conexão com seu banco de dados e a porta
 para rodar o servidor nodejs.

c) Na raiz do projeto abra o terminal e rode os comandos
$ npx prisma
$ npx prisma init
$ npx prisma migrate dev --name NomeDaMigrate

d) Para finalizar, na raiz do projeto abra o terminal e rode o comando
$ node server.js

