import { Model, Server } from "miragejs";

const Categories = ["Miscellaneous",
  "Drinks",
  "Canned Goods"];

const Products = [
  ["Chocolate", "White flour", "Low fat cheese"],
  ["Raspberry milk", "Chocolate milk", "Energy drink"],
  ["Peaches", "Spagetti", "Baked Beans", "SPAM"]
];

const Database = () => (new Server({
  models: {
    category: Model,
    product: Model,
  },

  seeds(server) {
    //Categories
    Categories.map((category, id) =>
      server.schema.categories.create({ id: id, description: category }))

    //Products
    var productID = 0;
    Products.forEach((productGroups, categoryID) => {
      productGroups.forEach(product => {
        server.schema.products.create({
          id: productID,
          categoryID: categoryID,
          description: product
        });
        productID++;
      })
    });
  },

  routes() {
    this.namespace = "api";
    //Categories
    this.get("/categories", (schema) => {
      return schema.categories.all()
    });

    //Products
    this.get("/products", (schema) => {
      return schema.products.all()
    });
  },


}));

export default Database;