  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
/**
 * start with an array  called nums equal to [0, 1, 2, 3, 4].
 * Now I’ll call reduce on the nums array to get the sum. 
 * Unfortunately, this won’t do anything just yet.  
 * Like map and filter, we need to pass the reduce method a callback function which will be executed on each element of the array.
 * The callback function takes two parameters rather than one. 
 * The parameters the callback function takes are typically called acc, for accumulator, and curr for current value.
 * The accumulator represents the value that will ultimately be returned from the reduce method. 
 * In this case it will accumulate and keep track of the sum as the callback function is executed on each array element.
 * So here, the accumulator will be an integer because we’re calculating a sum, but we could also be accumulating items into an array, an object or something else. 
 */
const nums = [0,1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc +curr;
}, 10);
console.log(sum);

// one liner
const numbers = [0, 1, 2, 3, 4];
let sums = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sums);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience,);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} <-- this is what we want to achieve! 
/*
• If I want to create a property in my object for Developer, I need to get curr.profession. 
•	I’ll call this variable key. 
•	Now, I need to check whether the key already exists in the object we’re going to be accumulating into. 
•	If it doesn’t yet exist, I’ll set it equal to curr.yrsExperience. 
•	This means the first time we see a new profession, that property will be added into the accumulator and its value will be set to the team member’s experience.  
•	Otherwise, if the key does already exist, it’s as simple as adding the current member’s experience to the already existing value. 
•	Or else, if the key does already exist, it’s as simple as adding the current member’s experience to the already existing value. 
•	When I’m done, all I’ve got to do is return the accumulator.
*/
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {}); 
console.log(experienceByProfession);