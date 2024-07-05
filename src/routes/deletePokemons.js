// Importation du modèle Pokemon depuis le fichier sequelize dans le dossier db
const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
  // Définition d'une route DELETE pour supprimer un Pokémon par son ID
  app.delete('/api/pokemons/:id', (req, res) => {
    // Recherche du Pokémon par son ID dans la base de données
    Pokemon.findByPk(req.params.id).then(pokemon => {
        if (pokemon === null) {
            const message = "Le Pokemon demandé n'existe pas, réessayez avec un autre identifiant";
            return res.statut(404).json({message});
          }
      // Stockage du Pokémon trouvé dans une variable pour usage ultérieur
      const pokemonDeleted = pokemon;
      // Suppression du Pokémon de la base de données
      Pokemon.destroy({
        where: { id: pokemon.id }
      })
      .then(_ => {
        // Message de succès indiquant que le Pokémon a été supprimé
        const message = `Le pokémon avec l'identifiant n°${pokemonDeleted.id} a bien été supprimé.`
        // Réponse JSON envoyée au client avec le message et les données du Pokémon supprimé
        res.json({message, data: pokemonDeleted })
      });
    })
        .catch(error => {
            const message = 'La pokémons n`\'a pas pu être supprimé, Réessayez dans quelques instants.';
            res.status(500).json({ message, data: error });
    });    
  });
};
