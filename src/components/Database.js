import { Model, Server } from "miragejs";

const Categories = ["Miscellaneous", "Drinks", "Canned Goods"];

const Database = () => (new Server({
  models: {
    category: Model,
  },

  seeds(server) {
    Categories.map(category =>
      server.schema.categories.create({ description: category }))
  },

  routes() {
    this.namespace = "api";

    this.get("/categories", (schema) => {
      return schema.categories.all()
    });
  },


}));

export default Database;