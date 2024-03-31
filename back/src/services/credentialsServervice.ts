// Credential:

// id: ID numérico que identifica al par de credenciales.

// username:username del usuario que posee las credenciales.

// password: password del usuario que posee las credenciales.

import { randomBytes } from 'crypto';

let nextCredentialId=1

// Función para generar una contraseña aleatoria
function generateRandomPassword(length: number = 10): string {
    return randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
}

// Función para crear una credencial a partir de un correo electrónico
export function createCredential(email: string): ICredential {
    // Obtener el nombre de usuario del correo electrónico
    const username = email.split('@')[0];

    // Generar una contraseña aleatoria
    const password = generateRandomPassword();

    // Crear un nuevo objeto de credencial
    const newCredential: ICredential = {
        id: nextCredentialId,
        username: username,
        password: password
    };

    // Añadir la nueva credencial a la base de datos temporal o realizar la inserción en la base de datos PostgreSQL

    // Aquí debes insertar la credencial en tu base de datos PostgreSQL
    // Por ejemplo, usando un cliente de PostgreSQL como 'pg'

    // Incrementar el ID para el próximo par de credenciales
    nextCredentialId++;

    // Retornar el objeto de la credencial creada
    return newCredential;
}

// Definir la interfaz ICredential
export interface ICredential {
    id: number;
    username: string;
    password: string;
}

// Exportar la interfaz ICredential
export default ICredential;
