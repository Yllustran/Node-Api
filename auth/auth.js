const jwt = require('jsonwebtoken')
const privateKey = require('./private_key')

// Exportation du middleware
module.exports = (req, res, next) => {
  // Récupération de l'en-tête d'autorisation
  const authorizationHeader = req.headers.authorization
  
  // Vérification de la présence de l'en-tête d'autorisation
  if(!authorizationHeader) {
    const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`
    return res.status(401).json({ message })
  }
    
  // Extraction du jeton de l'en-tête
  const token = authorizationHeader.split(' ')[1]
  
  // Vérification et décodage du jeton
  jwt.verify(token, privateKey, (error, decodedToken) => {
    if(error) {
      const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource.`
      return res.status(401).json({ message, data: error })
    }
    
    // Vérification de l'ID utilisateur dans le corps de la requête
    const userId = decodedToken.userId
    if (req.body.userId && req.body.userId !== userId) {
      const message = `L'identifiant de l'utilisateur est invalide.`
      res.status(401).json({ message })
    } else {
      // Passer au middleware suivant
      next()
    }
  })
}
