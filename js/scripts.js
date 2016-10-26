var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var embededSymbols = [];
var tailingSymbols = ['.', ',', ';', ':']

var pigLatin = function (input){
  var inputNoSymbols = input.replace(/[^a-zA-Z ]/g, "").toLowerCase();
  var letters = inputNoSymbols.split("");
  console.log(letters);
  if (vowels.includes(letters[0])){
    letters.push("a", "y");
    alert(letters);
  }
  else {
    //var firstLetter = letters[0];

    letters.push("a", "y");
  }

};

$(function(){
  $('.blanks form').submit(function(event){
    var inputSentence = $('input#sentence').val();
    var pigSentence = pigLatin(inputSentence);
    event.preventDefault();
  });
});
