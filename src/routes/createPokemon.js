// Importation du modèle Pokemon depuis le fichier sequelize dans le répertoire db
const { Pokemon } = require('../db/sequelize')
module.exports = (app) => {

  // Définition d'une route POST sur l'endpoint /api/pokemons
  app.post('/api/pokemons', (req, res) => {

    Pokemon.create(req.body)
      // Gestion de la promesse avec then : si la création du pokémon réussit
      .then(pokemon => {
        const message = `Le pokémon ${req.body.name} a bien été créé.`
        // Envoi de la réponse en format JSON contenant le message et les données du pokémon créé
        res.json({ message, data: pokemon })
      })
      // Gestion des erreurs en cas d'échec de la création du pokémon
      .catch(error => {
        const message = `La création du pokémon a échoué.`
        res.status(500).json({ message, data: error })
      })
  })
}