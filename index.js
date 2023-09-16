const contacts = require("./contacts");

const argv = require("yargs").argv;

// TODO: рефакторити
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
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
invokeAction({
  action: "add",
  name: "Mango",
  email: " mango@gmail.com",
  phone: "322-22-22",
});
