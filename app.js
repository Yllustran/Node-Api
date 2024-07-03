// Importation du module express pour créer une application web
const express = require('express');
const { success } = require('./helper.js');
// Importation des données des pokémons à partir du fichier 'card-pokemons.js'
let pokemons = require('./card-pokemons.js');
const app = express();
// Définition du port sur lequel l'application va écouter
const port = 3000;

// Définition d'une route pour la méthode GET sur le chemin '/' 
// Cette route envoie une réponse avec le message 'hello world !'
app.get('/', (req, res) => res.send('hello world !'));

// Définition d'une route pour la méthode GET sur le chemin '/api/pokemons/:id' 
// Cette route permet de récupérer un pokémon par son ID
app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // Recherche du pokémon correspondant à l'ID dans la liste des pokémons
    const pokemon = pokemons.find(pokemon => pokemon.id === id);

    // Vérification si l'ID est supérieur à 151, car le pokédex final ne contiendra que 151 pokémons
    if (id > 151) {
        res.send('Navré, le pokedex ne contient que 151 pokémons...');
    } else {
        // Si le pokémon est trouvé, envoi d'une réponse avec au format json
        const message = 'Un pokémon a bien été trouvé.';
        // on utiise la methode sucess du module helper avec deux paramètres (message, data)
        res.json(success(message, pokemon));
    }
});

// Définition d'une route pour la méthode GET sur le chemin '/api/pokemons'
// Cette route envoie une réponse avec le nombre total de pokémons dans le pokédex
app.get('/api/pokemons', (req, res) => {
    res.send(`Il y a ${pokemons.length} pokémons dans le pokdex pour le moment.`);
});

// j'affiche un message dans la console pour indiquer que le serveur est en cours d'exécution
app.listen(port, () => console.log(`Application Node est démarré sur : http://localhost:${port}`));
