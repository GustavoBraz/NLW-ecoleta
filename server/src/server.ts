import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors()); // Para controlar quais rotas pode acessar aplicação
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // static é usado para servir arquivos statics de uma determinada pasta

app.listen(33333);