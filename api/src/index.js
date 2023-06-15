const express = require('express');
require('express-async-errors');

const routes = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

// Middleware 1
// response.send "trava" a aplicação, ou seja, a próxima etapa não é executada
// response.send('Intercepted by middleware');
// next() continua o processo para o próximo middleware
// app.use((request, response, next) => {
//   request.appID = 'MeuAppID';
//   next();
// });

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log('Server started at http://localhost:3001'));
