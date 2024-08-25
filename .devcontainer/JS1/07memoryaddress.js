// stack(Primitive Datatypes)  ........... Heap(Non Primitive Data Types)

let num1=4;
let num2=num1;
num2=8;
console.log(num1 , num2 );

//heap
let User1 ={
    email : "abc@gmail.com",
    contact : "1234567890"
}
let User2=User1;
User2.email= "google@gmail.com";
 console.log(User1.email);
 console.log(User2.email);
