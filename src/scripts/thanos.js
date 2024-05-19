import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB, 'utf-8');
    const parsedContacts = JSON.parse(allContacts);

    const result = parsedContacts.filter(() => {
      return Math.random() >= 0.5;
    });

    await fs.writeFile(PATH_DB, JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
};

await thanos();
