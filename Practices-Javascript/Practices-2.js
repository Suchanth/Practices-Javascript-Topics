//Array Destructuring
//Rest Operator is used to add the remaining details
const fname=["Ramesh","Antony","Parthiban","Leo"];
const[name1,name2,...name3]=fname;
console.log(name1);
console.log(name2);
console.log(name3);

//using function array destructuring
function Maths(x,y){
    add = x + y;
    sub = x - y;
    mul = x * y;
    div= x / y;
    return[add,sub,mul,div];
    
}
const[add1,sub1,mul1,div1]=Maths(100,30);
console.log(add1);
console.log(sub1);
console.log(mul1);
console.log(div1);

//Object Destructuring
const employee={
    name:"Ramkumar",
    id:101,
    role:"Developer",
    address:"Salem",
}
const{name:firstname,...remainingDetails}=employee;
console.log(firstname,remainingDetails);

let favnum1,favnum2;
({favnum1,favnum2,...others}={
    favnum1:23,
    favnum2:45,
    favnum3:56,
    favnum4:76,
});
console.log(favnum1,favnum2,others);

const name={
    firstname:"Leo",
    lastname:"Das",
    age:34,
    role:"Developer",
}
function myDisplay({firstname,lastname,age,role}){
    console.log(`My Name is: ${firstname} ${lastname}, My Age is: ${age},My Role is: ${role}`);
}
myDisplay(name);

//Promise
const reached=true;
const person=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(reached){
            resolve("The person reached home");
        }else{
            reject("The person not reached home")
        }
    },3000);
    
});
person.then((success)=>{console.log(success)})
.catch((failure)=>{console.log(failure)})
.finally(()=>{console.log("The person reached home successfully")});

function Myemployee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let age=34;
            if(age>18){
                resolve("The Employee is eligible for voting")
            }else{
                reject("Not Eligible for Voting")
            }
        },4000)
    })
}
Myemployee().then((success)=>{console.log(success)})
.catch((failure)=>{console.log(failure)})
.finally(()=>{console.log("The Employee voted successfully")})


//Exception Handling
//try,catch,throw,finally
function Sum(value1,value2){
    try{
        if(value1==undefined || value2==undefined){
            throw new Error("Invalid Arguments")
        }
        else{
            let value=value1+value2;
            console.log("Addition of Two Numbers is: "+value);
        }
    }
    catch(err){
            console.log(err.message)
    }
    finally{
        console.log("Addition of two numbers is executed successfully");
    }
}
Sum(34,56);

//Async/Await
function Employee(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let age=34;
        if(age>18){
            resolve("The employee is eligible for work")
        }else{
            reject(age)
        }
    },5000)
})
}
async function newData(){
    let fname=await Employee();
    console.log(fname);
}
newData().finally(()=>{
    console.log("The Work started on time")
})

//call function
const student={
    fullname: function(){
        return this.firstname + " " +this.lastname;
    }
}
const student1={
    firstname:"Ram",
    lastname:"Kumar"
}
const student2={
    firstname:"Sam",
    lastname:"Sundar"
}
console.log((student.fullname.call(student1)))
console.log((student.fullname.call(student2)))
console.log((student.fullname.apply(student1)))
console.log((student.fullname.apply(student2)))