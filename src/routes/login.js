// Importation des modules nécessaires
const { User } = require('../db/sequelize'); // Importation du modèle User à partir de sequelize
const bcrypt = require('bcrypt'); // Importation de bcrypt pour le hachage et la comparaison des mots de passe
const jwt = require('jsonwebtoken');


// Exportation d'une fonction prenant l'application Express comme argument
module.exports = (app) => {
  // Création d'une route POST pour /api/login
  app.post('/api/login', (req, res) => {
    // Recherche d'un utilisateur dans la base de données par son nom d'utilisateur
    User.findOne({ where: { username: req.body.username } }).then(user => {

      if (!user) { // si l'identifiant n'existe pas....
        const message = `L'utilisateur demandé n'existe pas.`;
        return res.status(404).json({ message });
      }
      // La methode .compare : compare le mot de passe entré par l'utilisateur, du mot de passe encrypté dans la BDD
      bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
        if (!isPasswordValid) { // Si le mot de passe est invalide....
          const message = `Le mot de passe est incorrect.`;
          return res.status(401).json({ message });
        }
        // JWT 
        // On génère un token JWT avec la méthode sign
        const token = jwt.sign(
          { userId: user.id},
          privatekey,
          { expiresIn: '24h'}
        )

        // Si le mot de passe est valide, retourner un message de succès avec les données de l'utilisateur
        const message = `L'utilisateur a été connecté avec succès`;
        return res.json({ message, data: user, token });
      });
    })
    .catch(error => {
      const message = `L'utilisateur n'a pas pu être connecté. Réssayez dans quelques instants`;
      return res.json({ message, data: user });
    })
  });
};
