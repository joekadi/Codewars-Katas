/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test"
*/

//My solution
function reverseWord(word){
    return word.split("").reverse().join("");
  }
  
  function spinWords(string){
    var reversedString = "";
    var words = string.split(" ");
    var i = 0;
    words.forEach(word => {
      var wordtoadd;
      if(word.split("").length>=5){
        wordtoadd = reverseWord(word);
      }else{wordtoadd=word;}
      if(words.length == 1){reversedString+=wordtoadd} //when string is 1 word
      else{
          reversedString+=wordtoadd
          if((i + 1) != words.length){reversedString+=" "}
      }
      i++;
    })
    return reversedString;
  }

  //Example solution
  function exampleSpinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }