var { assert } = require('chai');
var { combine, add, addSingleItem, countItems } = require('../lib/mod3assessment.js');

describe('IronFE', function() {
  it('should return correct result', function() {
    const obj1 = { kale: null, apple: 5, orange: null, garlic: 130,
                    banana: 8, avocado: 44 }
    const obj2 = { kale: null, apple: null, orange: 3, garlic: 4,
                    banana: 2, pineapple: 1 }

    const result = { kale: 0, apple: 5, orange: 3, garlic: 134, banana: 10, avocado: 44, pineapple: 1 }
    assert.deepEqual(combine(obj1, obj2), result)
  })

  it('should return combined object', function() {
    const amount = [12, 5, 8, 130, 8, 44]
    const foodNames = ['kale', 'apple', 'orange', 'garlic',
                        'banana', 'avocado' ]

    const result = { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 }

    assert.deepEqual(add(amount, foodNames), result)
  })

  it('should add value to a particular object key', function(){
    const obj = { kale: 12, apple: 5, orange: 8, garlic: 130,
                  banana: 8, avocado: 44 };

    const result = { kale: 12, apple: 9, orange: 8, garlic: 130, banana: 8, avocado: 44 }

    assert.deepEqual(addSingleItem(obj, 'apple', 4), result)
  })

  // 4. Count the number of occurances of values in an array, returns an object, using Reduce (can't use obj.values())
  	// const vehs = ['car', 'car', 'truck', 'bike', 'boat', 'truck', 'car']
  	// => { car: 3, truck: 2, bike: 1, boat: 1 }

  it('should Count the number of occurances of values in an array, returns an object, using Reduce', function(){
    const vehs = ['car', 'car', 'truck', 'bike', 'boat', 'truck', 'car']
    const result = { car: 3, truck: 2, bike: 1, boat: 1 }

    assert.deepEqual(countItems(vehs), result)
  })


})
