let sum = 0;

for (let i = 1; i <= 20; i++) {
  console.log(i); //
  sum = sum + i;
  console.log(sum); // 1 // 3 // 6 // 10 // 15 // 21
}

console.log("-------------------------------");

for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log("There is", i, "bottle of beer on the table");
  } else {
    console.log("There are", i, "bottles of beer on the table");
  }
}

//3
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i, "is even");
  } else {
    console.log(i, "is odd");
  }
}
//4

let result = 0;
for (let i = 0; i <= 10; i++) {
  result = i * 9;
  console.log(result);
}
//5
for (let i = 1; i <= 10; i++) {
  console.log("multipliction table of", i, "is:");
  for (let j = 1; j <= 10; j++) {
    console.log(i, "x", j, "=", i * j);
  }
}

//5

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 !== 0) {
    console.log(i, "Fizz");
  } else if (i % 5 == 0 && i % 3 !== 0) {
    console.log(i, "Buzz");
  } else if (i % 5 == 0 && i % 3 == 0) {
    console.log(i, "FizzBuzz");
  } else {
    console.log(i);
  }
}

//6

let totalsum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    totalsum += i;
}
}
console.log(totalsum);
//7
for (let i = 100; i <= 1000; i += 100){
    console.log(i);
}
for (let i = 0; i <= 10; i += 2){
    console.log(i);
}
for (let i = 3; i <= 15; i += 3){
    console.log(i);
}
for (let i = 9; i <= 0; i--){
    console.log(i);
}

let result4 = "";
for (let j = 0; j < 3; j++) {
for (let i = 0; i <= 4; i++) {
result4 = result4 + i + " ";
console.log(i);
}
}

console.log(result4); 

let result5 = "";
for (let j = 1; j <= 4; j++) {
for (let i = 0; i < 3; i++) {
result5 = result5 + j + " ";
// console.log(i);
}
}

console.log(result5); 
        //     for (let j = 1; j <= 4; j++)
        
        // }
        

// for (let i = 1; i <= 4; i++){
//     for (let j = 1; j <= 4; j++)

// }


//8

let isPalindrome = 'Madame' 
console.log(isPalindrome.split('').reverse().join('') == isPalindrome)