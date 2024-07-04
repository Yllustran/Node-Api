// Exportation de la fonction 'success' pour qu'elle soit accessible dans d'autres modules
exports.success = (message, data) => {
    // La fonction retourne un objet contenant les propriétés 'message' et 'data'
    return { message, data }
};

