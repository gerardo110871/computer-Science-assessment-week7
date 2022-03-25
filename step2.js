//1
let  sumArray = (arr,target) => {
    let ar = []
    arr.forEach((element,index) => {      
      arr.forEach((element2, index2) => {
              if((index2 > index) && (element + element2 == target)){
                ar.push({element, element2})             
              }
          });
      });
      return ar
    }
    
    //   console.log(sumArray([1, 2, 3, -2, -1],0))

//2
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

// console.log(hasUniqueChars("Monday"))
// -> True

// console.log(hasUniqueChars("Moonday"))
// -> False

//3
function isPangram(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
 }

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// -> True

// console.log(isPangram("I like cats, but not mice"))
// -> False

//4

function findLongestWord(array) {
    let longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  let word = findLongestWord(["hi", "hello"]).length
  // -> 5
  console.log(word);