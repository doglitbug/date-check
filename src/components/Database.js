import { belongsTo, Model, Server, RestSerializer, hasMany } from "miragejs";

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
      expiry: hasMany(),
    }),
    expiry: Model
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
          description: productName,
        });
      })
    });

    //Dates

    var today = new Date();
    var newDay = new Date();

    //Loop through all products
    for (var i = 1; i <= server.schema.products.all().length; i++) {
      //Add 0-5 dates
      var datesToAdd = Math.random() * 5 - 1;
      for (var j = 0; j < datesToAdd; j++) {
        //Get a random date from now to 2 weeks away
        newDay.setDate(today.getDate() + Math.random() * 14);
        //Add to product
        server.schema.products.find(i).createExpiry({ date: newDay.toISOString().slice(0, 10) });
      }
    }
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
      include: ['category', 'expiry'],
      embed: true
    })
  }
}));

export default Database;