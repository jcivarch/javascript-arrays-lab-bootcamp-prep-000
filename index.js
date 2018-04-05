const kitten = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kitten.push(name);
  return destructivelyAppendKitten("Ralph");
}

