
const user = {
    name : "Huskey Buddy",  // here the name stored as stirng
    age  : 4,
    "hobby" : "eating ICE",
    is_Login : false ,
}
user.name ="Hello Hike";
console.log(user);
Object.freeze(user);  /* Object.freeze() actully freeze of lock the object after using this 
 if you make any changes in code then yet it will give the previous result given in the iput */

user.name="Hello Huskey";
console.log(user);
 