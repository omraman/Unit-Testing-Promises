const cal = (x, y) => {
    console.log("x: "+x+ " y: "+y);
    positiveSum(x, y).then((result) => {
        console.log("Sum: "+result);
    }).catch(err => {
        console.log(err);
        console.log("end of functions");
    })
    
}

positiveSum = (x, y) => {
    return new Promise((resolve, reject) => {
        if(x+y > 0){
            resolve(x+y);
        }else{
            reject("Sum is less then zero")
        }
    })
}

cal(2,-9);