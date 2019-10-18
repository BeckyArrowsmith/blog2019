require("dotenv").config();
const fs = require('fs');

const contentful = require("contentful");

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_CDA_TOKEN;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

client.getEntries().then(function(entries) {
  let response = JSON.stringify(entries.items);

  fs.writeFile("./data/contentful-data.json", response, error => {
    if (error) throw error;
  });
});
