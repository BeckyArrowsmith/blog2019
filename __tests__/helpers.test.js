const assert = require("assert");
const chai = require("chai")
const fs = require("fs")

describe('getcontent.js functions correctly', function () {
    var chaiAssert = require("chai").assert;
    it("should have contentful-posts.json at /data/contentful-posts.json", async () => {
        let fileFound
        (fs.existsSync("./data/contentful-posts.json")) ? fileFound = true : fileFound = false;

        assert(fileFound, true);
    });

    it('should have the kinda data we want', function() {
        fs.readFile("./data/contentful-posts.json", (err, data) => {
          if (err) throw err;
          chaiAssert.include(data.toString(), '[{"sys":{', 'contentful-posts.json contains sys object');
        });
    })
});