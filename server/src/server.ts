import express, { request } from 'express';
// Para o express no TypeScript é necessária instalação
// de biblioteca de definição de tipos com o comando:
// npm install @types/express -D (necessário apenas em
// desenvolvimento).
// Em produção não é necessário, pois o TypeScript
// já terá sido convertido em código JavaScript.

const app = express();

// Rota: Endereço completo da requsição
// Recurso: Qual entidade estamos acessando do sistema


// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com id 5

const users = [
  'Gustavo',
  'Eduardo',
  'Wagner',
  'Renata'
];

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');
  return response.json(users);
});

app.get('/users/:id', (request, response) => {

});

app.post('/users', (request, response) => {
  const user = {
    name: 'Gustavo',
    email: 'gustavo.braz89@gmail.com'
  }
  return response.json(user);
});

app.listen(33333);