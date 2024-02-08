//Practices-Topics
//Array Methods
// forEach() methods
// const fruit=["Apple","Orange","Mango","Banana"];
// fruit.forEach((fruits)=>{
//     console.log(fruits);
// });
// const name=["Ramesh","Suresh","Sathya","Arun"];
// name.forEach((names)=>{
//     console.log(names.toLowerCase());
//     console.log(names.toUpperCase())
// })

// //map()methods
// const numbers=[1,2,3,4,5,6,7,8];
// let names=numbers.map(function(value){
//     return value * 2;
// })
// console.log(names);

// const array=[23,34,45,67];
// const newarray=array.map(myNum)
// function myNum(value){
//     return value * 10;
// }
// console.log(newarray);

// const products=["T.V","Washing Machine","A.C","Refrigerator"];
// const product1=products.map(myProduct)
// function myProduct(val){
//     return val.toUpperCase();
// }
// console.log(product1);

// const persons=[
//     {fname:"Parthiban",lastname:"Leo"},
//     {fname:"Leo",lastname:"Das"},
//     {fname:"Antony",lastname:"Das"},
//     {fname:"Harold",lastname:"Das"},
// ];
// let result=persons.map(myPersons)

// function myPersons(name){
//     return [name.fname,name.lastname].join(" ");
// }
// console.log(result);

// filter() method
// let age=[23,34,56,17,16];
// let age1=age.filter(myAge);
// function myAge(ages){
//     return ages > 18;
// }
// console.log(age1);

// const number=[1,2,3,4,5,6,7,8,9,10];
// function isPrime(num){
//     for(let i=2;num>i;i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return num > 1;
// }
// console.log(number.filter(isPrime))

//reduce() method
const array=[23,45,67,89,90];
function MyName(firstvalue,currentvalue,index){
    const returns=firstvalue+currentvalue;
    console.log(
        `firstvalue: ${firstvalue}, currentvalue: ${currentvalue}, index: ${index},returns: ${returns}`
    );
    return returns;
}
console.log(array.reduce(MyName))

const array1=[3,5,8,9,6];
const initialSum=0;
const sum=array1.reduce((firstvalue,currentvalue)=>
    firstvalue+currentvalue,initialSum
)
console.log(sum);

//callback function
// a function passed an argument to the another function is called callback function
function Sum(x,y,callback){
    let value= x+y;
    callback(value);    
}
function Display(value){
    document.write("<h1> Sum: "+value+ "<h1>")
}
Sum(23,34,Display);

//sort()method
//used to sort the values in the array
const arr=["January","March","April","July"];
const result=arr.sort();
console.log(result);
const names=["Ramesh","Suresh","Rajesh","Sam"];
const result1=names.sort()
console.log(result1);

//entries() methods
const arr2=[34,45,67,78]
const result2=arr2.entries()
console.log(result2.next().value)//index values
//console.log(result2.next().done)//true or false
console.log(result2.next().value);