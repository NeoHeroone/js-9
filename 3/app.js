let sentence = prompt("Gapni kiriting:");
function sentence1(sentence) {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}


let capitalizedSentence = sentence1(sentence);
alert(capitalizedSentence);