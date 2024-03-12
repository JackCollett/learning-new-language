const fizzBuzz = (num) => {
    if (num % 3 == 0 && num % 5 == 0) {
        return console.log("FizzBuzz")
    } if (num % 5 == 0) {
        return console.log("Buzz")
    } else if (num % 3 == 0) {
        return console.log("Fizz")
    } else {
        return console.log(num)
    }
};