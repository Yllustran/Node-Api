const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const sequelize = require('./src/db/sequelize')
const { initDb } = require('./src/db/sequelize')

const app = express();
const port = 3000; // Définition du port sur lequel l'application va écouter

app
    .use(favicon(__dirname + '/favicon.ico')) // Utilise le middleware 'serve-favicon' pour afficher le fichier favicon.ico 
    .use(morgan('dev')) // Utilise le middleware 'morgan' pour logger les requêtes HTTP
    .use(bodyParser.json()); // Utilise le middleware 'body-parser' pour analyser les corps des requêtes HTTP en format JSON

sequelize.initDb()

// Ici, je placerais les futurs points de terminaison

// Importation et configuration de la route pour récupérer tous les pokémons
require('./src/routes/findAllPokemons.js')(app);
// Importation et configuration de la route pour récupérer un pokémon par son ID
require('./src/routes/findPokemonByPk.js')(app);
// Importation et configuration de la route pour créer un nouveau pokémon
require('./src/routes/createPokemons.js')(app);
// Importation et configuration de la route pour modifier un pokemon par son ID pokémon
require('./src/routes/updatePokemons.js')(app);
// Importation et configuration de la route pour supprimer un pokemon par son ID pokémon
require('./src/routes/deletePokemons.js')(app);


// j'affiche un message dans la console pour indiquer que le serveur est en cours d'exécution
app.listen(port, () => console.log(`Application Node est démarré sur : http://localhost:${port}`));
