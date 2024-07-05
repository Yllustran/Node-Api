const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
  // Définition d'une route PUT sur l'endpoint /api/pokemons/:id pour mettre à jour un pokémon existant
  app.put('/api/pokemons/:id', (req, res) => {
    // Récupération de l'identifiant du pokémon à partir des paramètres de la requête
    const id = req.params.id

    // Utilisation de la méthode update du modèle Pokemon pour mettre à jour le pokémon avec les nouvelles données
    Pokemon.update(req.body, {
      where: { id: id } // Condition de mise à jour basée sur l'identifiant
    })
    .then(_ => {
      // Récupération du pokémon mis à jour par son identifiant
      return Pokemon.findByPk(id).then(pokemon => {
        // Gestion des erreur 404 - Le pokemon n'existe pas dans la BDD
        if (pokemon === null) { //affiche ce message d'erreur en cas d'erreur 404
          const message = "Le Pokemon demandé n'existe pas, réessayez avec un autre identifiant";
          return res.statut(404).json({message});
        }
        const message = `Le pokémon ${pokemon.name} a bien été modifié.`
        // Envoi de la réponse en format JSON contenant le message et les données du pokémon modifié
        res.json({ message, data: pokemon })
      })
    })
      // affiche ce message d'erreur en cas d'erreur serveur (Code 500)
    .catch(error => {
      const message = `La pokémons n'a pas pu être modifié, Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error });
    });
  });
};