import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB);
    const parsedContacts = JSON.parse(allContacts);
    return parsedContacts.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
