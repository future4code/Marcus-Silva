const colors = require("colors");

const tasks = ["estudar", "trabalhar", "ler livro"];

const task = process.argv[2];

if (!task) {
  return console.log(`Was expecting at least 1 parameter for new task`.red);
}

tasks.push(task);

console.log(`Task ${task} added successfuly`.magenta);
console.log("tasks:".magenta, tasks.toString().magenta);

const fs = require("fs");

const persistentTasks = JSON.parse(fs.readFileSync("src/data/tasks.json"));

const newPersistentTask = process.argv[2];

persistentTasks.push(newPersistentTask);

fs.writeFileSync(
  "src/data/tasks.json",
  JSON.stringify(persistentTasks, null, "\t")
);

console.log(`Persistent task ${newPersistentTask} added succesfully`.green);
console.log("Check file tasks.json on src/data".green);
