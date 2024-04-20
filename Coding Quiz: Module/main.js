/**
 * TODO 1 (Tiger.js):
 * Export values from Tiger class
 *
 * TODO 2 (Wolf.js)
 * Export value from Wolf class
 *
 * TODO 3 (main.js)
 * Import Tiger and Wolf classes
 *
 * TODO 4 (main.js)
 * Export the fight function, myTiger, myWolf, and result
 *
 */

// TODO 3
let Tiger = require('./Tiger');
let Wolf = require('./Wolf');
const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Tigers and wolves are both strong!';
};

const myTiger = new Tiger();
const myWolf = new Wolf();
const result = fight(myTiger, myWolf);

// TODO 4
module.exports ={
  fight,
  myTiger,
  myWolf,
  result
};

// Testing with console.log()
console.log(result);