import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const allContacts = await fs.readFile(PATH_DB);
    const parsedContacts = JSON.parse(allContacts);

    const newContact = createFakeContact();
    parsedContacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(parsedContacts));
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();
