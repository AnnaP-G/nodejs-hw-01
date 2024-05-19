import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB);
    return allContacts.toString();
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
