const contacts = require("./contacts");

const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

      break;

    case "get":
      const filteredContact = await contacts.getContactById(id);
      return console.log(filteredContact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
      break;

    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
