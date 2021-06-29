import { Model, Server } from "miragejs";

const Database = () => (new Server({
  models: {
    category: Model,
  },

  seeds(server){
    server.schema.categories.create({description: "Miscellaneous"})
    server.schema.categories.create({description: "Drinks"})
    server.schema.categories.create({description: "Canned goods"})
  },

  routes() {
    this.namespace = "api";

    this.get("/categories", (schema) => {
      return schema.categories.all()
    });
  },

  
}));

export default Database;