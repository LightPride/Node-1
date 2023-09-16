const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const filteredContact = data.find((contact) => (contact.id = contactId));
  return filteredContact || null;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
};

const removeContact = async (contactId) => {
  // const data = await listContacts();
  // const deletedContact = data.splice();
};

const addContact = async (name, email, phone) => {
  const data = await listContacts();
  console.log(data);
  const newContact = {
    id: v4(),
    name,
    email,
    phone,
  };
  data.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(newContact));
  return newContact;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
