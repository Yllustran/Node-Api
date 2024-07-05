const { Sequelize, DataTypes } = require('sequelize')
const PokemonModel = require('../models/pokemons')
const pokemons = require('./card-pokemons')
const UserModel = require('../models/users')
const sequelize = new Sequelize('pokedex', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})

const Pokemon = PokemonModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    pokemons.map(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        cp: pokemon.cp,
        picture: pokemon.picture,
        types: pokemon.types.join(',')
      }).then(pokemon => console.log(pokemon.toJSON()))
    })

    // On créer un premier utilisateur
    User.create({
        username: 'John',
        password: 'Doe'
    })
    .then(user => console.log(user.toJSON()));
    console.log('La base de donnée a bien été initialisée !')
  })
}

module.exports = { 
  initDb, Pokemon, User
}
