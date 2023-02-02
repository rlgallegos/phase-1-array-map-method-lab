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

const titleCased = () => {
  return tutorials.map(sentence => {
      let sentenceArray = [];
      let newSentence = [];
    
      for (let i = 0; i < sentence.length; i++)
      {
        if (sentence[i - 1] === ' ' || i === 0)
        {
          sentenceArray[i] = sentence[i].toUpperCase();
        }
        else
        {
          sentenceArray[i] = sentence[i];
        }
      }
      newSentence = sentenceArray.join("");
      
      return newSentence;
    })
  }


  // const titleCased = () => {
  //   return tutorials.map(sentence => {
  //       let words = sentence.split(" ");
  //       return words.map(word => {
  //         return word[0].toUpperCase() + word.slice(1);
  //       }).join(" ")
  //   })
  // }