module.exports = (request, response, next) => {
  // Wildcard -> Coringa -> '*' -> Libera CORS para todos sites
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Methods', 'GET, DELETE');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Max-Age', '10');
  next();
};
