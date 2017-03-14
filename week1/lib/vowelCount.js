// const vowels = ['a', 'e', 'i', 'o', 'u']
//
// function isCharVowel(char){
//   return vowels.includes(char)
// }
// function countVowelsInString(string){
//   let count = 0;
//   const arr = string.split('')
//   arr.forEach((item)=>{
//     if(isCharVowel(item)){
//       count++
//     }
//   })
//   return count;
// }
// function determineMost(arr){
//   let scoreArray = arr.map((item)=>{
//     return countVowelsInString(item)
//   })
//   let max = 0;
//   let maxIndex;
//   scoreArray.forEach((item, i)=>{
//     if(item > max){
//       max = item;
//       maxIndex = i;
//     }
//   })
//   return {
//     score: max,
//     string: arr[maxIndex]
//   }
// }
//
// module.exports = {isCharVowel, countVowelsInString, determineMost};
