/**
 * Unit-Testing in promises by using chai mocha 
 */

let add = (x,y) => {
    console.log("Value of x: "+x+" and value of y: "+y);
    return new Promise((resolve, reject) => {
        if(x<0){
            reject("x should be greater than zero");
        }else{
            resolve(x+y);
        }
    })
}

exports.add = add;