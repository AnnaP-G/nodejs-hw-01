import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const readContacts = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(readContacts);

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
