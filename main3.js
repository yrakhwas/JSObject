let str = "hello my dear world! 12 d "


function countOfSpaces(str) 
{
    let worlds = str.split(" ");
    let count = worlds.length - 1;
    console.log("Count of spaces: " + count);
}

function fistrUpper(str) 
{
    console.log(str.charAt(0).toUpperCase() + str.slice(1));
}

function countWords(str) {

    str = str.trim();

    let wordsArray = str.split(/\s+|,|\.|\?|!|:|;/);

    let filteredWordsArray = wordsArray.filter(word => word.length > 0);

    let wordCount = filteredWordsArray.length;
  
    console.log("Count of words: " + wordCount);
  }


  function isPalindrome(str) {
   
    str = str.replace(/\s+/g, '').toLowerCase();
    let reversedStr = str.split('').reverse().join('');
  
    if (str === reversedStr) {
      console.log("Your string is palindrome");
    } else {
      console.log("Your string is not palindrome");
    }
  }

  function generateAcronym(str) {
    let words = str.split(' ');
  
    let acronym = words.map(word => word.charAt(0).toUpperCase()).join('');
  
    console.log(acronym);
  }
countOfSpaces(str);
fistrUpper(str);
countWords(str);
isPalindrome(str);
generateAcronym(str);
