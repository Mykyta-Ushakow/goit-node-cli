const { program } = require("commander");

const contactsMd = require("./contacts");

program
	.option("-a, --action <type>", "choose action")
	.option("-i, --id <type>", "user id")
	.option("-n, --name <type>", "user name")
	.option("-e, --email <type>", "user email")
	.option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			contactsMd.listContacts().then(console.log);
			break;

		case "get":
			contactsMd.getContactById(id).then(console.log);
			break;

		case "add":
			contactsMd.addContact(name, email, phone).then(console.log);
			break;

		case "remove":
			contactsMd.removeContact(id).then(console.log);
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
}

invokeAction(options);
