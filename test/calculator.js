const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const calculator = require("../modules/calculator");
const addition = require("../modules/addtion");

describe("Calculator", () => {
    it("It calculate 2 nos",(done) => {
        var add = sinon.stub(addition, "add");
        add.withArgs(1,4).rejects("some error occured");
        calculator.cal(1,4).catch((error) => {
            expect(error).to.equals("some error occured 1")
            done();
        }).catch((err) => {
            done(err);
        })
        add.restore();
    })

    // Now we will define same add methd but the differen input 
    // Same is used for the recursive methods
    it("Add twice", (done) => {
        var add = sinon.stub(addition, "add").onFirstCall().resolves(5).onCall(1).resolves(9);
        add.withArgs(sinon.match.any, sinon.match.any);

        calculator.calculate(1, 4).then((result) => {
            expect(result).to.equals(9);
            done();
        }).catch((err) => {
            done(err);
        })
    })


    
});