const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h1>Hello truc-muuucchhheee! pour le pipe</h1></H1><H2>deuxième ligne</H2>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
