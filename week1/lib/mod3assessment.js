// POSSIBLE JS PROBLEMS
// 1. Combine two objects
  const obj1 = { kale: null, apple: 5, orange: null, garlic: 130,
                  banana: 8, avocado: 44 }
  const obj2 = { kale: null, apple: null, orange: 3, garlic: 4,
                  banana: 2, pineapple: 1 }
// => { kale: 0, apple: 5, orange: 3, garlic: 134, banana: 10, avocado: 44, pineapple: 1 }

const combine = (...objs) => {
  const objectKeysArrayOfArrays = []
  objs.forEach((obj)=>{
    objectKeysArrayOfArrays.push(Object.keys(obj))
  })
  const result = {};
  objectKeysArrayOfArrays.forEach((arr, i)=>{
    arr.forEach((key)=>{
      if(result.hasOwnProperty(key)){
        if(objs[i][key] !== null){
          result[key] = result[key] + objs[i][key]
        }
      } else {
        if(objs[i][key] !== null){
          result[key] = objs[i][key]
        } else {
          result[key] = 0
        }
      }
    })
  })
  return result;
}

// 2. Reduce two arrays into one object
  const amount = [12, 5, 8, 130, 8, 44]
  const foodNames = ['kale', 'apple', 'orange', 'garlic',
                      'banana', 'avocado' ]
// => { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 }


const add = (arr, obj) => {
  return foodNames.reduce((acc, itr, i)=>{
    acc[itr] = arr[i]
    return acc
  }, {})
}
// 3. Add value to a particular object key
    const obj = { kale: 12, apple: 5, orange: 8, garlic: 130,
                  banana: 8, avocado: 44 };
	// arguments:  obj, 'apple', 4
	// => { kale: 12, apple: 9, orange: 8, garlic: 130, banana: 8, avocado: 44 }

const addSingleItem = (obj, key, amnt) => {
  obj[key] = obj[key] + amnt
  return obj
}
// 4. Count the number of occurances of values in an array, returns an object, using Reduce (can't use obj.values())
	// const vehs = [car, car, truck, bike, boat, truck, car]
	// => { car: 3, truck: 2, bike: 1, boat: 1 }

  const countItems = (vehs) => {
    return vehs.reduce((acc, itr)=>{
      if(acc.hasOwnProperty(itr)){
        acc[itr]++
      } else {
        acc[itr] = 1
      }
      return acc
    },{})
  }

// 5. Use filter to return elements of an array that fit a provided argument.
	const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// findFruits('ap') => ['apple', 'grapes']
// findFruits('o') => ['mango', 'orange']


// 6. Use splice to return given elements in an array and/or add an additional element into the array (still using splice only). USE THE DOCS.

	const countries = ['spain', 'china', 'mexico', 'ghana'];

// Return both the final array, and the element (s) that were removed.

// => const final = ['spain', 'mexico', 'ghana']
// => const removed = ['china']

// => const final = ['spain', 'china', 'mexico', 'sweden', 'ghana']
// => const removed = []

module.exports = {combine, add, addSingleItem, countItems};
