import express, { request } from 'express';
// Para o express no TypeScript é necessária instalação
// de biblioteca de definição de tipos com o comando:
// npm install @types/express -D (necessário apenas em
// desenvolvimento).
// Em produção não é necessário, pois o TypeScript
// já terá sido convertido em código JavaScript.

const app = express();

app.use(express.json());

// Rota: Endereço completo da requsição
// Recurso: Qual entidade estamos acessando do sistema


// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com id 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação, etc
// Request Body: Parâmetros para criação/atualização de informações

const users = [
  'Gustavo', // 0
  'Eduardo', // 1
  'Wagner',  // 2
  'Renata'   // 3
];

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');
  return response.json(users);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user)
});

app.post('/users', (request, response) => {
  const data = request.body;
  console.log(data);


  const user = {
    name: 'Gustavo',
    email: 'gustavo.braz89@gmail.com'
  }
  return response.json(user);
});

app.listen(33333);