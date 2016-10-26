var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

var pigLatin = function (input){
  var inputNoSymbols = input.replace(/[^a-zA-Z ]/g, "").toLowerCase();
  var letters = inputNoSymbols.split("");
  var inputLength = input.length;
  console.log(letters);
  if (vowels.includes(letters[0])){
    letters.push("a", "y");
    //alert(letters);
  }
  else {
    debugger
    for (idx = 0; idx < letters.length; idx ++)
      if (consonants.includes(letters[0])){

        letters.push(letters.shift());
      }
      else {
        letters.push("a", "y");
        break
      }

    //var firstLetter = letters.shift();
    //letters.push(firstLetter, "a", "y");


    alert(letters);
  }
  //return letters.toString("");

};

$(document).ready(function(){
  $('.blanks form').submit(function(event){
    event.preventDefault();
    var inputSentence = $('input#sentence').val();
    var pigSentence = pigLatin(inputSentence);

  });
});
