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
      Pokemon.findByPk(id).then(pokemon => {
        // Définition du message de succès avec le nom du pokémon modifié
        const message = `Le pokémon ${pokemon.name} a bien été modifié.`
        // Envoi de la réponse en format JSON contenant le message et les données du pokémon modifié
        res.json({ message, data: pokemon })
      })
    })
    // Gestion des erreurs en cas d'échec de la mise à jour du pokémon
    .catch(error => {
      const message = `La modification du pokémon a échoué.`
      res.status(500).json({ message, data: error });
    });
  });
};