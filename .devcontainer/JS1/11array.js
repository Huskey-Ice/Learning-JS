const arr1 =[1,2,3,4,5];
const arra =["Huskey","Ice","Ide eater"];

// Methods 
arr1.push(6); // to push in the end 
console.log(arr1);
arr1.pop();  // to remove the push or last element 
console.log(arr1);
arr1.pop(2);   // pop always remobe from end and the lastest element 

console.log(arr1);

arr1.unshift(10);   // always enter in the begining for this all positions must be shifted porblems in log array 
console.log(arr1);

arr1.shift();  // delete form the beining element 
console.log( arr1);
console.log(arr1.indexOf[4]); // Index tells about the data type stored in the mentiones sapce 

console.log(arr1.indexOf(1)); // Index will only give the value if it is exist 

console.log(arr1.includes(4)); // Includes is a Boolean type if given value peresent in the array the it gives trye else gives false 
console.log(arr1.includes(10));

const newarr1= arr1.join();  // Join operator change the data type to sting 

console.log(arr1);
console.log(newarr1);
 console.log(typeof(newarr1));   // Type of used to know about the time 
 console.log(typeof(arr1));