let myArray=[1,2,3,true,"Daniel"];

console.log(myArray[3]);//true

let Array=["What is the meaning of life",42,true];
console.log(Array[0]);


//array declaration
const numbers=[10,20,30,40,50];
const months=["jan","feb","mar","apr","may"];

//methods for array
numbers.push(60,70,80);//append an element to the array
numbers.unshift(-30,-20,-10,0)//prepend an element to the array


months.pop();//removes last element in array
months.shift();// removes first element in array
months.splice(1,1);
//displaing the values

console.table(months);
console.table(numbers);

//acess to the values in array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//array dimension
console.log(numbers.length);