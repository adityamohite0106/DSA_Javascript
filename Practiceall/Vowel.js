// Find Vowels

function CountVowels(str){

   str = str.toLowerCase();

   let count = 0;
   const vowels =  "aeiou";
   for (let char of str){
    if(vowels.includes(char)){
         count++;
    }
   }
return count
}

Console.log(CountVowels("Aditya Mohite"))