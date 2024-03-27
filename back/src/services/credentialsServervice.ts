// Credential:

// id: ID numérico que identifica al par de credenciales.

// username:username del usuario que posee las credenciales.

// password: password del usuario que posee las credenciales.


import ICredential from "../interfaces/ICredentail"

// Esta será nuestra "base de datos" temporal para almacenar credenciales
let credentialsDatabase: ICredential[] = [];
let nextCredentialId = 1; // Para asignar ID único a cada par de credenciales

export function createCredential(username: string, password: string): number {
    // Creamos un nuevo objeto de credencial
    const newCredential: ICredential = {
        id: nextCredentialId,
        username: username,
        password: password
    };

    // Añadimos la nueva credencial a la base de datos temporal
    credentialsDatabase.push(newCredential);

    // Incrementamos el ID para el próximo par de credenciales
    nextCredentialId++;

    // Retornamos el ID del par de credenciales creado
    return newCredential.id;
}

export function validateCredential(username: string, password: string): number | null {
    // Buscamos la credencial en la base de datos
    const credential = credentialsDatabase.find(cred => cred.username === username);

    // Si no se encontró la credencial, retornamos null
    if (!credential) {
        return null;
    }

    // Si se encontró la credencial, verificamos si la contraseña coincide
    if (credential.password === password) {
        // Si coincide, retornamos el ID de la credencial
        return credential.id;
    } else {
        // Si no coincide, retornamos null
        return null;
    }
}