// Importation du modèle Pokemon depuis le fichier sequelize dans le répertoire db
const { Pokemon } = require('../db/sequelize');
const auth = require('../auth/auth');
module.exports = (app) => {

  // Définition d'une route GET sur l'endpoint /api/pokemons + add auth
  app.get('/api/pokemons', auth, (req, res) => {
// Utilisation de la méthode findAll du modèle Pokemon pour récupérer tous les enregistrements de pokémons
Pokemon.findAll()   
    Pokemon.findAll()
      .then(pokemons => {
        const message = 'La liste des pokémons a bien été récupérée.'
        //Envoi de la réponse en format JSON contenant le message et les données des pokémons
        res.json({ message, data: pokemons })
      })
      // affiche ce message d'erreur en cas d'erreur serveur (Code 500)
      .catch(error =>{
        const message = ` La liste des pokémons n'a pas pu être récupérée. Réessayez dans quelques instants.`;
        res.status(500).json({message, data: error});
      });
  });
};