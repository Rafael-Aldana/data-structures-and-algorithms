'use strict';

function firstRepeatedWord(sentence){
  let words= sentence.split(' ');
  let frequency = {};
  for (let i =0; i< words.length; i++){
    let word = words[i];
    if(!frequency[word]){
      frequency[word] = 1;
    }else {
      frequency[word]++;
    }
  }
  for(let i=0; i < words.length; i++){
    let word = words[i];

    if(frequency[word] > 1) {
      return word;
    }
  }
}

console.log(firstRepeatedWord('of mice and men and mice'));
