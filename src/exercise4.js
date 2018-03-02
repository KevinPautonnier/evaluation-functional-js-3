const curry2 = (fn) => {
  console.log(fn.length)
  return function(sequence){
    if(sequence.length === 0){
      return 0
    }
    return function(input){
      if(input.length === 0){
        return 0
      }
      return input.split(sequence).length-1
    }
  }
};
const toto = (sequence, length) => {
  if(sequence.length === 0 || input.length === 0){
    return 0
  }
  return input.split(sequence).length-1
}

const countSequence = curry2(toto)

module.exports = {
  title: "Exercise 4",
  run: countSequence
};
