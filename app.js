// Importation du module express pour créer une application web
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const { Sequelize, DataTypes } = require('sequelize');
const { success, getUniqueId } = require('./helper.js');
// Importation des données des pokémons à partir du fichier 'card-pokemons.js'
let pokemons = require('./card-pokemons.js');
const PokemonModel = require('./pokemons'); 
const app = express();
// Définition du port sur lequel l'application va écouter
const port = 3000;

// Création d'une instance de Sequelize pour se connecter à la base de données
const sequelize = new Sequelize(
    'pokedex', // Nom de la base de données
    'root', // Nom d'utilisateur pour la base de données
    '', // Mot de passe pour la base de données
    {
        host: 'localhost', // Adresse du serveur de la base de données
        dialect: 'mariadb', // Type de base de données utilisé 
        dialectOptions: {
            timezone: 'Etc/GMT-2', // Fuseau horaire à utiliser pour les timestamps
        },
        logging: false // Désactivation des logs SQL dans la console
    }
);

// Synchronise la base de données, en supprimant et recréant les tables si nécessaire
sequelize.sync({force: true})
    .then(_ => {
        // Affiche un message dans la console indiquant que la base de données a été synchronisée
        console.log('La base de donnée "Pokedex" a bien été synchronisée')

        // Crée un nouveau Pokémon avec les informations fournies
        Pokemon.create({
            name: "Bulbizarre", // Nom du Pokémon
            hp: 25, // Points de vie du Pokémon
            cp: 5, // Points de combat du Pokémon
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png", // URL de l'image du Pokémon
            types: ["Plante", "Poison"].join() // Types du Pokémon, joint en une seule chaîne
        }).then(bulbizzare => console.log(bulbizzare.toJSON())) // Affiche les détails du Pokémon créé dans la console
    });

app
    .use(favicon(__dirname + '/favicon.ico')) // Utilise le middleware 'serve-favicon' pour afficher le fichier favicon.ico 
    .use(morgan('dev')) // Utilise le middleware 'morgan' pour logger les requêtes HTTP
    .use(bodyParser.json()); // Utilise le middleware 'body-parser' pour analyser les corps des requêtes HTTP en format JSON

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

// // CRUD -> read : on affiche la liste des pokemons au format json sur l'url api/pokemons
app.get('/api/pokemons', (req, res) => {
    for (let i of pokemons) {
        const message = 'Liste des Pokémons récupérée avec succès';
        res.json(success(message, pokemons));
    }
});

// CRUD -> Create : Route POST à l'URL /api/pokemons
app.post('/api/pokemons', (req, res) => {
    // Génère un nouvel ID unique pour le pokemon avec la méthode getUniqueId contenu dans helper.js
    const id = getUniqueId(pokemons);
    // Crée un nouvel objet pokemon avec les données de la requête, en ajoutant l'ID unique et la date de création
    const pokemonCreated = { ...req.body, ...{ id: id, created: new Date() }};
    // Ajoute le nouveau pokemon à la liste des pokemons
    pokemons.push(pokemonCreated);
    // Crée un message de succès avec le nom du pokemon créé
    const message = `Le pokemon ${pokemonCreated.name} a bien été créé`;
    // Renvoie une réponse JSON avec un message de succès et le pokemon créé
    res.json(success(message, pokemonCreated));
});

// CRUD -> Update : Pour la modification de pokemons sous insomnia
app.put('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pokemonUpdated = { ...req.body, id: id };
    pokemons = pokemons.map(pokemon => {
        return pokemon.id === id ? pokemonUpdated : pokemon;
    });
    const message = `Le pokemon ${pokemonUpdated.name} a bien été modifié.`;
    res.json(success(message, pokemonUpdated));
});

// CRUD -> Delete : Pour la suppression de pokemons sous insomnia
app.delete('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemonDeleted = pokemons.find(pokemon => pokemon.id === id)
    pokemons = pokemons.filter(pokemon => pokemon.id !== id)
    const message = `Le pokémon ${pokemonDeleted.name} a bien été supprimé.`
    res.json(success(message, pokemonDeleted))
  });

// Définition d'une route pour la méthode GET sur le chemin '/api/pokemons'
// Cette route envoie une réponse avec le nombre total de pokémons dans le pokédex
app.get('/api/pokemons', (req, res) => {
    res.send(`Il y a ${pokemons.length} pokémons dans le pokdex pour le moment.`);
});

// j'affiche un message dans la console pour indiquer que le serveur est en cours d'exécution
app.listen(port, () => console.log(`Application Node est démarré sur : http://localhost:${port}`));
