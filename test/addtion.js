const chai = require("chai");
const expect = chai.expect;
const addition = require("../modules/addtion");

describe("Addition", () => {
    it("It should add two numbers", (done) =>  {
        addition.add(1,4).then((result) => {
            expect(result).to.equal(5);
            done()
        }).catch((err) => {
            done(err);
        });
    });
    it("It should reject", (done) => {
        addition.add(1,4).catch((err) => {
            expect(err).to.equal("x should be greater then 0");
        })
        .then(() => { done() })
        .catch((err) => {
            done(err);
        })
    });
});