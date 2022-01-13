const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   const tutorialsArray = tutorials.map(tutorial => {
//     const tutorialArray = tutorial.split(" ");
//     const cappedArray = tutorialArray.map(word => word[0].toUpperCase())
//     return cappedArray
//   })
//   return tutorialsArray
// }

const titleCased = () => {
  return tutorials.map(tutorial => {
    const words = tutorial.split(" ");
    const Caps = words.map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1))
    const result = Caps.join(" ");
    return result;
  })
}