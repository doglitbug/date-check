import { belongsTo, Model, Server, RestSerializer } from "miragejs";

const CategoryData = [
  "Miscellaneous",
  "Drinks",
  "Canned Goods"];

const ProductData = [
  ["Chocolate", "White flour", "Low fat cheese"],
  ["Raspberry milk", "Chocolate milk", "Energy drink"],
  ["Peaches", "Spagetti", "Baked Beans", "SPAM"]
];

const Database = () => (new Server({
  models: {
    category: Model,
    product: Model.extend({
      category: belongsTo(),
    }),
  },

  seeds(server) {
    //Categories
    CategoryData.map((category) =>
      server.schema.categories.create({ description: category }))

    //Products
    ProductData.forEach((productGroups, categoryID) => {
      productGroups.forEach(productName => {
        server.schema.products.create({
          categoryId: categoryID + 1,
          description: productName
        });
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

  serializers: {
    application: RestSerializer,
    product: RestSerializer.extend({
      include: ['category'],
      embed: true
    })
  }
}));

export default Database;