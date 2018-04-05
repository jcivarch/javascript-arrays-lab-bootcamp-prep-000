const kitten = ["Milo", "Otis", "Garfield"];

destructivelyAppendKitten("Ralph");

function destructivelyAppendKitten(name) {
  return kitten.push(name);
}

