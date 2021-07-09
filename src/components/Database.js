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
      //Add 0-5 dates, minus 1 for more empty products
      var numberDatesToAdd = Math.random() * 5 - 1;
      var datesToAdd = [];

      //Generate an array of dates to add, with no duplicates
      for (var j = 0; j < numberDatesToAdd; j++) {
        //Get a random date from now to 2 weeks away
        newDay.setDate(today.getDate() + Math.random() * 14);
        //Format nicely
        var dateText = newDay.toISOString().slice(0, 10);
        //Check we dont already have this date
        if (!datesToAdd.includes(dateText)) {
          datesToAdd.push(dateText);
        }
      }

      //Add dates to product
      // eslint-disable-next-line
      datesToAdd.forEach(date => {
        server.schema.products.find(i).createExpiry({ date: date });
      });
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

    //Expiry
    this.post("/products/:productId/expiry", (schema, request) => {
      //TODO Check if product exists, 404 if not?
      let productId = request.params.productId;

      //Get data from body
      let attrs = JSON.parse(request.requestBody)
      //TODO Test this is correct!
      return schema.products.find(productId).expiry.create({attrs})
    });

    this.delete("/products/:productId/expiry/:expiryId",(schema, request) => {
      //Do we care about the product at all?
      return schema.expiry.find(request.params.expiryId).delete();
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