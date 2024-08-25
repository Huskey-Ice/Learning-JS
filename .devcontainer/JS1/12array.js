 const arr1 =["a","b","c"];
 const arr2 = ["d","e","f"];
 // arr1.push(arr2);    // It will make array inside an array 
  console.log(arr1);
  //console.log(arr1[2], arr1[3][2]) 

 // const arr_add=arr1.concat(arr2);  // Concat merge two strings 
 // console.log(arr_add);

 const spread =[...arr1,...arr2];  // Spread operator 
 console.log(spread);