var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
destructivelyAppendKitten("Ralph");

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(name) {
  return kittens.shift(name);
}
destructivelyPrependKitten("Bob");