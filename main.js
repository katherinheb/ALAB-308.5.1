// Part 1: Thinking Functionally

const num = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
let avg = 0
for (i = 0; i< num.length; i++){
    sum += num[i];
    avg = sum/num.length;
}
 console.log(sum);
 console.log(avg);

let strArry = ['AAAA', 'AAAABBBB', 'AAAABBBBCCCC'];

function longestWord() {
    return strArry.reduce(function (a, b) {
        return a.length > b.length ? a : b;
    });
}

console.log(longestWord());

function printNumbers(n) {
    if (n <= 0) {
      return; 
    }
  
    printNumbers(n - 1); 
    console.log(n); 
  }
  
  printNumbers(5); 


// Part 2: Thinking Methodically 

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
   
  age
  data.sort((a, b) => a.age - b.age);
  
  const filteredData = data.filter(person => person.age <= 50);
  
  const mappedData = data.map(person => ({
    ...person,
    job: person.occupation,
    age: parseInt(person.age) + 1
  }));
  
  const sumOfAges = data.reduce((sum, person) => sum + parseInt(person.age), 0);
  const averageAge = sumOfAges / data.length;
  
  console.log("Sorted data:", data);
  console.log("Filtered data:", filteredData);
  console.log("Mapped data:", mappedData);
  console.log("Sum of ages:", sumOfAges);
  console.log("Average age:", averageAge);
  
  
  //Part 3: Thinking Critically
  
  function incrementAge(obj) {
    if (!obj.age) {
      obj.age = 0;
    }
    obj.age++;
    obj.updated_at = new Date();
  }
  
  function incrementAgeCopy(obj) {
    const copy = { ...obj };
    if (!copy.age) {
      copy.age = 0;
    }
    copy.age++;
    copy.updated_at = new Date();
    return copy;
  }
  
  const person = { name: "Alice" };
  
  incrementAge(person);
  console.log(person);
  
  const personCopy = incrementAgeCopy(person);
  console.log(personCopy);
  console.log(person); 
  
  personCopy.updated_at.setTime(personCopy.updated_at.getTime() + 1000);
  console.log(personCopy);
  console.log(person); 
  
  function incrementAgeCopySafe(obj) {
    const copy = { ...obj };
    if (!copy.age) {
      copy.age = 0;
    }
    copy.age++;
    copy.updated_at = new Date().thisString();
    return copy;
  }