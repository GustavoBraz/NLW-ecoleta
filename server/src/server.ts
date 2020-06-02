import express from 'express';
// Para o express no TypeScript é necessária instalação
// de biblioteca de definição de tipos com o comando:
// npm install @types/express -D (necessário apenas em
// desenvolvimento).
// Em produção não é necessário, pois o TypeScript
// já terá sido convertido em código JavaScript.

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Gustavo',
    'Eduardo',
    'Wagner',
    'Renata'
  ]);
});

app.listen(33333);