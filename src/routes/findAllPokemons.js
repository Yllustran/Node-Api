// Importation du modèle Pokemon depuis le fichier sequelize dans le répertoire db
const { Pokemon } = require('../db/sequelize') 
module.exports = (app) => {

  // Définition d'une route GET sur l'endpoint /api/pokemons
  app.get('/api/pokemons', (req, res) => {
// Utilisation de la méthode findAll du modèle Pokemon pour récupérer tous les enregistrements de pokémons
Pokemon.findAll()   
    Pokemon.findAll()
      .then(pokemons => {
        const message = 'La liste des pokémons a bien été récupérée.'
        //Envoi de la réponse en format JSON contenant le message et les données des pokémons
        res.json({ message, data: pokemons })
      })
  })
}