// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe("removeAndShuffle", () => {
//   it("removes the first item from the array and shuffles the remaining items.", () => {
//     const result1 = removeAndShuffle(colors1);
//     const result2 = removeAndShuffle(colors2);
//     expect(result1).toEqual(
//       expect.arrayContaining(["yellow", "blue", "pink", "green"])
//     );
//     expect(result2).toEqual(
//       expect.arrayContaining([
//         "saffron",
//         "aquamarine",
//         "periwinkle",
//         "indigo",
//         "ochre",
//       ])
//     );
//   });
// });
//  ReferenceError: removeAndShuffle is not defined

const colors1 = ["purple", "blue", "green", "yellow", "pink"];
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron",
];
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// b) Create the function that makes the test pass.

// Pseudo code:
// Create dynamic fxn by using any given array as a parameter
// Destructuring to remove the first item
// Loop through the rest of the array in reverse order
// Generate a random index between 0 and i
// Shuffling the array using Fisher-Yates
// Swap the elements at indexes i and j
// Return the shuffled array

const removeAndShuffle = (arr) => {
  const [, ...rest] = arr;
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]]; // Shuffling the array using Fisher-Yates algorithm
  }
  return rest;
};
// console.log(removeAndShuffle(colors1));
// log 1 = [ 'yellow', 'pink', 'green', 'blue' ]
// log 2 = [ 'green', 'blue', 'pink', 'yellow' ]
// console.log(removeAndShuffle(colors2));
// log 1 = [ 'saffron', 'periwinkle', 'indigo', 'aquamarine', 'ochre' ]
// log 2 = [ 'ochre', 'periwinkle', 'saffron', 'aquamarine', 'indigo' ]

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// describe("endTally", () => {
//   it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
//     const votes1 = { upVotes: 13, downVotes: 2 };
//     // Expected output: 11
//     const votes2 = { upVotes: 2, downVotes: 33 };
//     // Expected output: -31
//     expect(endTally(votes1)).toEqual(11);
//     expect(endTally(votes2)).toEqual(-31);
//   });
// });
// ReferenceError: endTally is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
// create function that calculates the vote tally
// return output directly in var endTally
// subtract # of down votes from # of up votes

const votes1 = { upVotes: 13, downVotes: 2 };
const votes2 = { upVotes: 2, downVotes: 33 };

const endTally = (votes) => {
  return votes.upVotes - votes.downVotes;
};
