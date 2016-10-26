var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var tailingSymbols = [',','.',';',':','!','?',")",'}',"]"]
//This funciton
var pigLatinSentence = function(sentenceInput) {
  var words = sentenceInput.split(" ");
  var pigLatinFinal = [];
  words.forEach(function(word) {
    pigLatinFinal.push(pigLatin(word));

  });
    return pigLatinFinal.join(" ");
};



//This function takes a word and returns pig latin version of that word
var pigLatin = function (input){
  var inputNoSymbols = input.replace(/[^a-zA-Z ]/g, "").toLowerCase();
  var letters = inputNoSymbols.split("");
  var inputLength = input.length;
  if (vowels.includes(letters[0])){
    letters.push("a", "y");
  }
  else {
    for (idx = 0; idx < letters.length; idx ++)
      if (letters[0]=== "q" && letters[1] === "u") {
        letters.push(letters.shift());
        letters.push(letters.shift());
      }
      else if (consonants.includes(letters[0])){

        letters.push(letters.shift());
        if (letters[0] === "y") {
          letters.push("a", "y");
          break
        }
      }
      else {
        letters.push("a", "y");
        break
      }
  }
  return letters.join("");
};

$(document).ready(function(){
  $('.blanks form').submit(function(event){
    event.preventDefault();
    var inputWord = $('input#sentence').val();
    var pigWord = pigLatinSentence(inputWord);
    $('#output h5').text(pigWord);
  });
});
