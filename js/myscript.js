'use strict';
let numeri=[0,1,2,3,4,5,6,7,8,9];
let numeri2=[2,3,4,5,6];
let minore;

while(numeri.length !== numeri2.length){
    if(numeri.length < numeri2.length)
        numeri.push(Math.floor(Math.random() * 10))
    else
        numeri2.push(Math.floor(Math.random() * 10))
}
console.log(numeri.length.toString() + numeri2.length.toString());
