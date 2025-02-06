function stringChop(str, size) {
  // your code here
	if(str=="")
		return []

	for(let i =0;i<str.length;i+=size){
	if (i + size <= str.length) {
      result.push(str.slice(i, i + size));
    } else {
      result.push(str.slice(i));
    }
		return str
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
