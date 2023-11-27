function stringChop(str, size) {
	
	let num  = parseInt(size);
	  let arr = [];
	  let i = 0;
	  let n = str.length;
	  while((i+num) <= n ){
		  arr.push(str.slice(i,i+num));
		  i = i + num;
	  }
	  if( i < n ){
		arr.push(str.slice(i,i+num));
	  }
	  
	  return arr;
  }
  
 
  const str = prompt("Enter String.");
  const size = prompt("Enter Chunk Size.");
  alert(stringChop(str, size));
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
