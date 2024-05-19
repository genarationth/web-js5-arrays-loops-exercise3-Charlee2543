// ### Exercise #3
let addBox = "";
for (let i = 1; i<=5 ; ++i) {
    for (let j = 1; j <= i ; ++j) {
        addBox += "*";
    }
    addBox += "\n" ;
}
console.log(addBox);

// ### Exercise #4

let minus = "";
const numberToMinus =20
for (let i = numberToMinus ; i>0 ; i=i-0.5) {
    minus += i+"\n" ;
}
console.log(minus);


let oddNumber ="";
const oddNumberInLoop =1;
for (let i = oddNumberInLoop ; i<100 ; i=i+2){
    oddNumber =oddNumber+ i+"\n";
}
console.log(oddNumber);


let writeLoopNumber ="";
const n =6;
let i=0;
while (i<=n){
 writeLoopNumber +=`[${i}]`;
 i++;
}
console.log(writeLoopNumber);


let whileLoopPuls =null;
const outNumber=5;
let j =0;
while (j<=outNumber){
        whileLoopPuls+=j;
    // whileLoopPuls+=`${j}, `
    j++;
}
console.log(whileLoopPuls);