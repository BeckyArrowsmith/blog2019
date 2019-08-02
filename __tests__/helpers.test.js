const assert = require("assert");
const chai = require("chai")
const fs = require("fs")

describe('getcontent.js functions correctly', function () {
    var chaiAssert = require("chai").assert;
    it("should have contentful-data.json at /data/contentful-data.json", async () => {
        let fileFound
        (fs.existsSync("./data/contentful-data.json")) ? fileFound = true : fileFound = false;

        assert(fileFound, true);
    });

    it('should have the kinda data we want', function() {
        fs.readFile("./data/contentful-data.json", (err, data) => {
          if (err) throw err;
        //   console.log(data.toString());
          chaiAssert.include(data.toString(), '[{"sys":{', 'contentful-data.json contains sys object');
        });
    })
});