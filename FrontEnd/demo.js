console.log("Hello World");
let fullName = "John Doe";
console.log(fullName);
fullName= 12;
console.log(fullName);
const isBoolian= true;
const arr= [1, "John", true, {motherName: "Jane Doe", age: 40}];
const motherInfo= {motherName: "Jill Lyn", age: 39};
console.log(motherInfo)
const obj = {anotherName : "Jens Lyn", age: 12, isStudent: true, friends: ["Jane", "Jack"], mother: motherInfo};
console.log(obj.anotherName);
console.log(obj);
console.log(arr);
console.log(arr[0]);
arr.push("Jack");
console.log(arr);
const popped = arr.pop();
console.log("popped:", popped);
console.log(arr);
const subArr=arr.slice(1, 2);
console.log(subArr);
myFunc(motherInfo);
const myValue= null;
console.log(myValue)
let otherValue;
console.log(otherValue);

function myFunc(motherInfo){
    if(motherInfo == "number"){
        console.log("number")
    } else{
    console.log("not a number", motherInfo)
    }
}
myFunc(motherInfo);

console.log(typeof "Hello")
console.log(typeof 90)

const var1= 10;
const var2 ="10";
console.log(var1 == var2); //true
console.log(var1 === var2); //false

const myString = "Hello world";
console.log(myString.length);
console.log(myString.substring(0, 5));
console.log(myString.search("world"));
console.log(myString.replace("Hello", "Hi"));
console.log(myString.indexOf("world"));


const namesArr = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Jens"]
for(let i =0; i <namesArr.length; i++){

    console.log(namesArr[i])
}

namesArr.forEach(function (name){
    console.log(name);
});

namesArr.forEach((name, index) =>{
    console.log(name, index);
});

const addJensen= (name)=> {
    return name + " Jensen"
}
console.log(addJensen("Jens"));

const newArr= namesArr.map((names) =>{
    return names + " Doe";
});
console.log(newArr);

const newArrAdd= namesArr.map(addJensen);
console.log(newArrAdd);

const antoherArr= {anotherName : "Jens Lyn", age: 12, isStudent: true, friends: ["Jane", "Jack"], mother: motherInfo};
for (let key in antoherArr){
    console.log(key, antoherArr[key]);
}

for( let prop of Object.values(antoherArr)){
    console.log(prop);
}

const {anotherName: aName, age}= obj;
console.log(aName, age);


const [first, second, third]= namesArr;
console.log("");
console.log(first, second, third);

const [fourth, fith, ...rest]= namesArr;
console.log("");
console.log(fourth, fith, rest);


const info2= {...antoherArr, anotherName: "Jill Lyn", age: 39};
console.log(info2);

if(info2){
    console.log("info2 is there/true");
}
