import { getRepository } from "typeorm";
import { Credential } from "../entities/credentialEntities";
import ICredential from "../interfaces/ICredentail";
import passwordGenerator from "password-generator";

// Obtener todas las credenciales
export const getCredentialsService = async (): Promise<ICredential[]> => {
  const credentialRepository = getRepository(Credential);
  const credentials = await credentialRepository.find();
  return credentials;
};

// // Obtener una credencial por su ID

export const createCredentialService = async (email: string): Promise<ICredential> => {
    const username = email.split('@')[0]; // Extraer el nombre de usuario del email
    const password = passwordGenerator(8, false); // Generar una contraseña aleatoria de 8 caracteres sin caracteres especiales
  console.log("crendecialserviceemail", username)
  console.log("crendecialserviceemail", password)
    const credentialRepository = getRepository(Credential);
    const newCredential = credentialRepository.create({ username, password });
    await credentialRepository.save(newCredential);
    console.log("nueva credential",newCredential)
    return newCredential; // Devolver la credencial completa
  };
  
  export const loginService = async (username: string, password: string): Promise<number | null> => {
    const credentialRepository = getRepository(Credential);
    const credential = await credentialRepository.findOne({ where: { username, password } });

    if (credential) {
        return credential.id; // Devuelve el ID si se encuentra una credencial que coincida
    } else {
        return null; // Devuelve null si no se encuentran credenciales coincidentes
    }
};

  

// Eliminar una credencial por su ID
export const deleteCredentialService = async (credentialId: number): Promise<void> => {
  const credentialRepository = getRepository(Credential);
  await credentialRepository.delete(credentialId);
};
