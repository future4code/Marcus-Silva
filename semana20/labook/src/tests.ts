import { HashManager } from "./services/HashManager";
import { idGenerator } from "./services/idGenerator";

console.log("hi");

const id = new idGenerator().generate();
const hashPass = new HashManager().createHash("");
console.log({ id, hashPass });
