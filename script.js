function stringChop(str, size) {
  if (str === "") return [];

  let result = [];
  for (let i = 0; i < str.length; i+=size ) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
