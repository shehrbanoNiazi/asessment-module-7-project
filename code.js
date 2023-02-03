//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function sumFinder(arr, num) {
    let obj = {}
    let diff
  
    for (let i = 0; i < arr.length; i++) {
      diff = num - arr[i]
  
      if (obj[diff]) {
        return true
      } else {
        obj[arr[i]] = true
      }
    }
    return false
  }

  //o(n)
  
  //Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

  function uniqueCharacters(str)
{
     
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
 
    
    return true;
}
// O(1)

//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

//Write a function to check a sentence to see if it is a pangram or not


function checkPangram(str)
{
    mark = new Array(26).fill(false);
    let index;

    for (let i = 0; i < str.length; i++) {
        if ('A' <= str[i] && str[i] <= 'Z')
            index = str.charCodeAt(i) - 'A'.charCodeAt(0);
        else if ('a' <= str[i] && str[i] <= 'z')
             index = str.charCodeAt(i) - 'a'.charCodeAt(0);
 
        else continue;
        mark[index] = true;
    }
    for (let i = 0; i <= 25; i++)
        if (mark[i] == false)
            return false;
 
    return true;
}
 
// o(n2)
//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return str.length;
}
 //o(1)