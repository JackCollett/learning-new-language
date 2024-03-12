const getNumberSign = (num) => {
    if (num >= 1) {
        return console.log('positive')
    } else if (num === 0) {
        return console.log('zero')
    } else {
        return console.log('negative')
    }
};

const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.toString().length == validLength) {
      return console.log(true);
    } else {
      return console.log(false);
    }
};

module.exports = isValidLength;