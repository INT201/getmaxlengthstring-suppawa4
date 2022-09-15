const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (!(arrayOfString === null || arrayOfString === undefined)){
    lengArr = []
    maxArr = []
    for (em of arrayOfString) {
      lengArr.push(em.length)
    }
    max = Math.max.apply(Math,lengArr)
    for (em of arrayOfString){
      if(em.length === max)
      maxArr.push(em)
    }
    return maxArr
  }
  return undefined

}
module.exports = getMaxLengthString
