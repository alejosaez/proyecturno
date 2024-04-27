import { getRepository } from "typeorm";
import { Credential } from "../entities/credentialEntities";
import ICredential from "../interfaces/ICredentail";
import passwordGenerator from "password-generator";
import { User } from "../entities/UserEntities";
import {resendFunction} from "../services/email/reSend";
import {resendPasswordFunction} from "../services/email/reSendForgetPassword"


export const getCredentialsService = async (): Promise<ICredential[]> => {
  const credentialRepository = getRepository(Credential);
  const credentials = await credentialRepository.find();
  return credentials;
};



export const createCredentialService = async (email: string): Promise<ICredential> => {
  try {
  
    if (!email || email.trim() === '') {
      throw new Error('El email no puede estar vacío');
    }
   
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      throw new Error('El email no tiene un formato válido');
    }

    const username = email.split('@')[0];
    const password = passwordGenerator(8, false);
    
    const credentialRepository = getRepository(Credential);
    const newCredential = credentialRepository.create({ username, password });

    if (!newCredential) {
      throw new Error('Error al crear la nueva credencial');
    }
    await credentialRepository.save(newCredential);
   
    await resendFunction(password, username, email);
    return newCredential;
  } catch (error) {
    console.error('Error en createCredentialService:', error);
    throw error;
  }
};



  
  export const loginService = async (username: string, password: string): Promise<number | null> => {
    const credentialRepository = getRepository(Credential);
    const userRepository = getRepository(User);
  
    const credential = await credentialRepository.findOne({ where: { username, password } });
  
    if (credential) {
      const user = await userRepository.findOne({ where: { credentialsId: credential.id } });
  
      if (user) {
        return user.id;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  


export const deleteCredentialService = async (credentialId: number): Promise<void> => {
  const credentialRepository = getRepository(Credential);
  await credentialRepository.delete(credentialId);
};


export const getCredentialServiceByEmail = async (email: string): Promise<string | null> => {
 
  const username = email.split('@')[0];
  const credentialRepository = getRepository(Credential);
  const credential = await credentialRepository.findOne({ where: { username } });
  
  if (credential) {
    await resendPasswordFunction(credential.password,username,email); 
    return credential.username
  } else {
    return null;
  }
}