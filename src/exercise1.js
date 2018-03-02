const moment = require("moment");

const sortProduct = input => {
  return input
  .filter(value => moment(value.dateAdded).year() > 2000)
  .reduce((acc, value) => {
    var result = {
      name: value.name,
      year: moment(value.dateAdded).year(),
      monthOfYear: moment(value.dateAdded).month(),
      quantity: value.quantity
    }
    acc[value.name] = [result]
    return acc
  }, {})
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
