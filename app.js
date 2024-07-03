const express = require('express');
const app = express();

const port = 3000;

// app.METHODE(CHEMIN,GESTIONNAIRE(req,res))
app.get('/', (req, res) => res.send('hello world !'));

app.get('/api/pokemons/:id', (req, res) => {
    const id = req.params.id;

    if (id > 151) {
        res.send('Navré, le pokedex ne contient que 151 pokémons...');
    } else {
        res.send(`Vous avez demandé le pokémon n°${id}`);
    }
});

app.listen(port, () => console.log(`Application Node est démarré sur : http://localhost:${port}`))