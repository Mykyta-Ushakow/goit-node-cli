// import { program } from "commander";
// import fs from "fs/promises";
// import path from "path";

const { program } = require("commander");
const fs = require("fs").promises;
const path = require("path");

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
			// ...
			break;

		case "get":
			// ... id
			break;

		case "add":
			// ... name email phone
			break;

		case "remove":
			// ... id
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
}

// invokeAction(options);

console.log(path);
