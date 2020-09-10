const fs = require("fs");
const path = require("path");
const cors = require('cors');
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");

const schemaFile = path.join(__dirname, "schema.graphql");
const typeDefs = fs.readFileSync(schemaFile, "utf8");

const Products = [
  {
    id: 01,
    name: "Air Jordan",
    brand: "Nike",
    quantity: "10",
    image: "https://images.unsplash.com/photo-1589187928505-f6af6c26d1ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: "$99.00"
  },
  {
    id: 02,
    name: "Sneaker",
    brand: "roadster",
    quantity: "17",
    image: "https://images.unsplash.com/photo-1595461135849-bf08893fdc2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: "$69.00"
  },
  {
    id: 03,
    name: "Sport Shoe ",
    brand: "reebok",
    quantity: "08",
    image: "https://images.unsplash.com/photo-1530389912609-9a007b3c38a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: "$129.00"
  },
  {
    id: 04,
    name: "Casual Shoe",
    brand: "HRX",
    quantity: "27",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: "$89.00"
  },
  {
    id: 05,
    name: "Long Ankel",
    brand: "roadster",
    quantity: "17",
    image: "https://images.unsplash.com/photo-1567099845769-2047819e000b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: "$59.00"
  },
];

const resolvers = {
  Query: {
    Products: () => Products,
    // Product: (_, { id }) => Product.find(Product => Product.id == id),
  },
  // Product: {
  //   id: Product => Product.id,
  //   name: Product => Product.name,
  // },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });
var app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(process.env.PORT || 4001);
console.log("Running a GraphQL API server at localhost:4001/graphql");