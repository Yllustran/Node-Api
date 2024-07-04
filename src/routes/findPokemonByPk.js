// Importation du modèle Pokemon depuis le fichier sequelize dans le répertoire db
const { Pokemon } = require('../db/sequelize')
module.exports = (app) => {
  
  // Définition d'une route GET sur l'endpoint /api/pokemons/:id
  app.get('/api/pokemons/:id', (req, res) => {
    
    // Utilisation de la méthode findByPk du modèle Pokemon pour récupérer un pokémon par son ID
    Pokemon.findByPk(req.params.id)
      
      // Gestion de la promesse avec then : si la récupération du pokémon réussit
      .then(pokemon => {
        const message = 'Un pokémon a bien été trouvé.'
        // Envoi de la réponse en format JSON contenant le message et les données du pokémon
        res.json({ message, data: pokemon })
      })
  })
}
