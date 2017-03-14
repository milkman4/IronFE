const displayThis = (obj, array) => {
  return array.map((item) => {
    return `${obj[item]} and ${item}`
  })
}

const addNewItem = (pizza, newObj) => {
  return Object.assign(pizza, newObj)
}

const addItems = (obj, key, value) => {
  let newObj = obj;
  newObj[key] += value
  return newObj
}

const foodCounter = (foodNames, amount) => {
  return amount.reduce((acc, item, i)=>{
    let obj={}
    obj[foodNames[i]]=item
    return Object.assign(acc, obj)
  }, {})
}

const createNewList = (obj, add) => {
  let keyArray1 = Object.keys(obj)
  let keyArray2 = Object.keys(add)


  return keyArray.reduce((acc, item) => {
    return Object.assign(acc, {[item]: obj[item] + newList[item]})
  }, {})
}

const addList = (obj, newList) => {
  let keysArray = Object.keys(obj);
  let newObj = {};
  keysArray.forEach((item, index)=>{
    if(obj[item]===null) obj[item] = 0;
    if(newList[item]===null) newList[item] = 0;
    return newObj[item] = obj[item]+newList[item]
  })
  return newObj
}

const totalBunch = (obj) => {

  let listArray = Object.keys(obj)
  let result = {};

  listArray.forEach((item, i)=>{
    let total = 0;
    let itemKeys = Object.keys(obj[item]);
    if(itemKeys.length > 0){
      itemKeys.forEach((itemKey,i)=>{
        total = obj[item][itemKey] + total;
      })
      let newObject = {[item]: total}
      result = Object.assign(result, newObject )
     }
    else {
      let newObject = {[item]: obj[item]}
      result = Object.assign(result, newObject )
    }
  })
  return result
}

module.exports = { foodCounter, addItems, addList, createNewList, addNewItem,
                   totalBunch, displayThis };
