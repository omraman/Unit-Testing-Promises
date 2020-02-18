const addition = require("./addtion");

var calculator = (x,y) => {
    console.log("two numbers: "+x+" "+y);
    return new Promise((resolve, reject) => {
        addition.add(x,y).then((result) => {
            resolve(result);
            
        }).catch((err) => {
            reject(err+ " 1");
        })
    });
}
 
// Now we will define same add methd but the differen input 
// Same is used for the recursive methods

var calculate = (x,y) => {
    console.log("2 nos: "+x+" "+y);
    return new Promise((resolve, reject) => {
        addition.add(x,y).then((result_1) => {
            console.log("result_1: "+ result_1);
            addition.add(y, result_1).then((result_2) => {
                console.log("result_2: "+ result_2);
                resolve(result_2);
            })
        })
    })
}

exports.cal = calculator;
exports.calculate = calculate;