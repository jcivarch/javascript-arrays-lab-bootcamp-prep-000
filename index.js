var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
destructivelyAppendKitten("Ralph");

function destructivelyPrependKitten(name) {
  return kittens.shift(name);
}
destructivelyPrependKitten();