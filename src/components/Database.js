import { Server } from "miragejs";

const Database = () => (new Server({
  routes() {
    this.namespace = "api";

    this.get("/categories/", () => {
      return [
        { description: "Miscellaneous" },
        { description: "Drinks" },
        { description: "Canned Goods" }
      ];
    });
  }
}));

export default Database;