// Exportation de la fonction 'success' pour qu'elle soit accessible dans d'autres modules
exports.success = (message, data) => {
    // La fonction retourne un objet contenant les propriétés 'message' et 'data'
    return { message, data }
};

// Exporte une fonction getUniqueId qui prend une liste de pokemons
exports.getUniqueId = (pokemons) => {
    // Crée une liste des IDs des pokemons
    const pokemonsIds = pokemons.map(pokemon => pokemon.id);
    // Trouve l'ID maximum dans la liste des IDs
    const maxId = pokemonsIds.reduce((a, b) => Math.max(a, b));
    // Calcule un nouvel ID unique en ajoutant 1 à l'ID maximum
    const uniqueId = maxId + 1;

    // Retourne le nouvel ID unique
    return uniqueId;
}