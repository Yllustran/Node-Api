// Exporter un modèle User
module.exports = (sequelize, DataTypes) => {
    // Définir le modèle User
    return sequelize.define('User', {
      // Champ id : entier, clé primaire, auto-incrémenté
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // Champ username : chaîne de caractères
      username: {
        type: DataTypes.STRING,
        // le nom d'utilisateur doit être unique
        unique: {
            msg: 'Le nom est déjà pris.'
        }
      },
      // Champ password : chaîne de caractères
      password: {
        type: DataTypes.STRING
      }
    })
  }

  // Note : Sequelize ajoutera lui-même les propriétés created et updated