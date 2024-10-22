let sentence = prompt("Gapni kiriting:");

function nechta2(sentence) {
  let words = sentence.split(' ');
  let count = 0;

  words.forEach(word => {
      if (word.charAt(0).toUpperCase() === word.charAt(0)) {
          count++;
      }
  });

  return count;
}

let nechta = nechta2(sentence);

alert("Gapdagi bosh harfi katta bo'lgan so'zlar soni: " + nechta);