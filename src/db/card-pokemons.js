const pokemons = [
        {
            id: 1,
            name: "Bulbizarre",
            hp: 25,
            cp: 5,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            types: ["Plante", "Poison"],
            created: new Date()
        },
        {
            id: 2,
            name: "Herbizarre",
            hp: 35,
            cp: 8,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
            types: ["Plante", "Poison"],
            created: new Date()
        },
        {
            id: 3,
            name: "Florizarre",
            hp: 45,
            cp: 12,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
            types: ["Plante", "Poison"],
            created: new Date()
        },
        {
            id: 4,
            name: "Salamèche",
            hp: 28,
            cp: 6,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
            types: ["Feu"],
            created: new Date()
        },
        {
            id: 5,
            name: "Reptincel",
            hp: 38,
            cp: 9,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
            types: ["Feu"],
            created: new Date()
        },
        {
            id: 6,
            name: "Dracaufeu",
            hp: 48,
            cp: 14,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
            types: ["Feu", "Vol"],
            created: new Date()
        },
        {
            id: 7,
            name: "Carapuce",
            hp: 21,
            cp: 4,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
            types: ["Eau"],
            created: new Date()
        },
        {
            id: 8,
            name: "Carabaffe",
            hp: 31,
            cp: 7,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
            types: ["Eau"],
            created: new Date()
        },
        {
            id: 9,
            name: "Tortank",
            hp: 41,
            cp: 10,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
            types: ["Eau"],
            created: new Date()
        },
        {
            id: 10,
            name: "Chenipan",
            hp: 15,
            cp: 2,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
            types: ["Insecte"],
            created: new Date()
        },
        {
            id: 11,
            name: "Chrysacier",
            hp: 20,
            cp: 3,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
            types: ["Insecte"],
            created: new Date()
        },
        {
            id: 12,
            name: "Papilusion",
            hp: 30,
            cp: 8,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
            types: ["Insecte", "Vol"],
            created: new Date()
        },
        {
            id: 13,
            name: "Aspicot",
            hp: 16,
            cp: 2,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
            types: ["Insecte", "Poison"],
            created: new Date()
        },
        {
            id: 14,
            name: "Coconfort",
            hp: 18,
            cp: 3,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png",
            types: ["Insecte", "Poison"],
            created: new Date()
        },
        {
            id: 15,
            name: "Dardargnan",
            hp: 35,
            cp: 9,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
            types: ["Insecte", "Poison"],
            created: new Date()
        },
        {
            id: 16,
            name: "Roucool",
            hp: 30,
            cp: 7,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
            types: ["Normal", "Vol"],
            created: new Date()
        },
        {
            id: 17,
            name: "Roucoups",
            hp: 40,
            cp: 10,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png",
            types: ["Normal", "Vol"],
            created: new Date()
        },
        {
            id: 18,
            name: "Roucarnage",
            hp: 50,
            cp: 13,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png",
            types: ["Normal", "Vol"],
            created: new Date()
        },
        {
            id: 19,
            name: "Rattata",
            hp: 18,
            cp: 6,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
            types: ["Normal"],
            created: new Date()
        },
        {
            id: 20,
            name: "Rattatac",
            hp: 25,
            cp: 8,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png",
            types: ["Normal"],
            created: new Date()
        },
        {
            id: 21,
            name: "Piafabec",
            hp: 14,
            cp: 5,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
            types: ["Normal", "Vol"],
            created: new Date()
        },
        {
            id: 22,
            name: "Rapasdepic",
            hp: 40,
            cp: 12,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png",
            types: ["Normal", "Vol"],
            created: new Date()
        },
        {
            id: 23,
            name: "Abo",
            hp: 16,
            cp: 4,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
            types: ["Poison"],
            created: new Date()
        },
        {
            id: 24,
            name: "Arbok",
            hp: 35,
            cp: 10,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png",
            types: ["Poison"],
            created: new Date()
        },
        {
            id: 25,
            name: "Pikachu",
            hp: 21,
            cp: 7,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
            types: ["Electrik"],
            created: new Date()
        },
        {
            id: 26,
            name: "Raichu",
            hp: 35,
            cp: 12,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png",
            types: ["Electrik"],
            created: new Date()
        },
        {
            id: 27,
            name: "Sabelette",
            hp: 19,
            cp: 3,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
            types: ["Sol"],
            created: new Date()
        },
        {
            id: 28,
            name: "Sablaireau",
            hp: 35,
            cp: 9,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png",
            types: ["Sol"],
            created: new Date()
        },
        {
            id: 29,
            name: "Nidoran♀",
            hp: 16,
            cp: 4,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png",
            types: ["Poison"],
            created: new Date()
        },
        {
            id: 30,
            name: "Nidorina",
            hp: 25,
            cp: 7,
            picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png",
            types: ["Poison"],
            created: new Date()
        }
   ];
     
   module.exports = pokemons;