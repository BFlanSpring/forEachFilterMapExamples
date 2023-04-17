//ForEach

const doubleValues = function(arr){
	let newArr = [];
	arr.forEach(function(val){
		newArr.push(val*2);
	});
	return newArr;
}

const onlyEvenValues = function(arr){
	let newArr =[];
	arr.forEach(function(val){
		if (val%2===0){
			newArr.push(val);
		}
	});
return newArr;
}

function showFirstAndLast(arr){
	let newArr =[];
	arr.forEach(function(val){
		newArr.push(val[0] + val[val.length-1]);
	})
	return newArr;
}

function addKeyAndValue(arr, key, value){
	arr.forEach(function(val){
		val[key]=value;
	});
	return arr;
}

function vowelCount(str){
	let splitArr = str.split("");
	let obj = {};
	const vowels ="aeiou";

	splitArr.forEach(function(char){
		let lowerCasedLetter = char.toLowerCase();
		if (vowels.indexOf(lowerCasedLetter) !== -1){
			if (obj[lowerCasedLetter]){
				obj[lowerCasedLetter]++;
			}
			else{
				obj[lowerCasedLetter]=1;
			}
		}

	});
	return obj;
}

//map

function doubleValuesWithMap(arr){
	return arr.map(function(value, index, array){
		return value*2;
	})
	
}

function valTimesIndex(arr){
	return arr.map(function(value, index, array){
		return value*index;
})
}

function extractKey(arr, key){
	return arr.map(function(val){
		return val[key];
	})
}

function extractFullName(arr){
	return arr.map(function(val){
		return val.first+" "+val.last;
	})
}

//filter

function filterByValue(arr, key){
	return arr.filter(function(value, index, array){
		return value[key] !== undefined;
	});
}

function find(arr, val){
	return arr.filter(function(value){
		return value === val;
})[0];
}

function findInObj(arr, key, value){
	return arr.filter(function(val){
		return val[key]===value;
	})[0];
}
function removeVowels(str){
	const vowels ="aeiou";
	return str
	.toUpperCase()
	.split("")
	.filter(function(val){
		return vowels.indexOf(val) === -1;
	})
	.join("");
}

function doubleOddNumbers(arr){
	return arr.filter(function(val){
		return val%2 !==0;
	}).map(function(val){
		return va*2;
	});
}