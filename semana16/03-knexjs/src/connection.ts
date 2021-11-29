import knex from "knex";

const connection = knex({
  client: "mysql",
  connection: {
    host: "35.226.146.116",
    port: 3306,
    user: "marcus-luis",
    password: "lrP8implrQbHYxf#Fpug",
    database: "maryam-marcus-luis",
    multipleStatements: true,
  },
});

export default connection;
