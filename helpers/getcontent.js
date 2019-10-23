require("dotenv").config();
const fs = require("fs");

const contentful = require("contentful");

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_CDA_TOKEN;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

client.getEntries({
    content_type: "blogPost"
  }).then(function(entries) {
  let response = JSON.stringify(entries.items);

  fs.writeFile("./data/contentful-posts.json", response, error => {
    if (error) throw error;
  });
});

client.getEntry("32Ua6DxhAO9eUmgLjKVHJ7").then(function(entry) {
  let response = JSON.stringify(entry);

  fs.writeFile("./data/about-page.json", "[" + response + "]", error => {
    if (error) throw error;
  });
});