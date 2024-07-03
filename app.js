const express = require('express');
const app = express();

const port = 3000;

// app.METHODE(CHEMIN,GESTIONNAIRE(req,res))
app.get('/', (req, res) => res.send('hello world !'));

app.get('/api/pokemons/1', (req, res) => res.send('Hello, Bulbizarre !'));

app.listen(port, () => console.log(`Application Node est démarré sur : http://localhost:${port}`))