function getRandomNumber(min, max) {
  let range = max - min + 1;
  let random = Math.floor(Math.random() * range) + min;
  return random;
}

function getEven(number) {
  return number % 2 == 0;
}
