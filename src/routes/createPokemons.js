const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
  // Définition d'une route POST sur l'endpoint /api/pokemons
  app.post('/api/pokemons', (req, res) => {
    // Déstructuration des données de la requête pour séparer 'types' et le reste des données
    const { types, ...rest } = req.body;
    
    // Utilisation de la méthode create du modèle Pokemon pour créer un nouveau pokémon avec les données de la requête
    Pokemon.create({
      ...rest,
      types: Array.isArray(types) ? types.join(',') : types // Conversion du tableau 'types' en chaîne de caractères si nécessaire
    })
    // Gestion de la promesse avec then : si la création du pokémon réussit
    .then(pokemon => {
      // Définition du message de succès avec le nom du pokémon créé
      const message = `Le pokémon ${req.body.name} a bien été créé.`
      // Envoi de la réponse en format JSON contenant le message et les données du pokémon créé
      res.json({ message, data: pokemon })
    })
    // affiche ce message d'erreur en cas d'erreur serveur (Code 500)
    .catch(error => {
      const message = `La pokémons n'a pas pu être ajouté au Pokédex. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    });
  });
};
