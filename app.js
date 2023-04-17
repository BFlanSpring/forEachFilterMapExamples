// function forEach(arr, callback){
//     for(let i=0; i<arr.length; i++){
//         callback(arr[i])
//     }
// }

// forEach(colors, function(color){
//     console.log(color.toUpperCase());
// });

////////////////////////////////////////////////////////////////////////////////////

// const numbers = [12,19,29,35,40];
// const negatives = numbers.map(function(num){
//     return num * -1;
// })

///////////////////////////////////////////////////////////////////////////////////
const todos =[
    {
        id:1,
        text:'Walk the dog',
        priority:'high'
    },
    {
        id:2,
        text:'walk the Cat',
        priority: 'low'
    },
    {
        id:3,
        text:'clean my clothes',
        priority:'medium'
    }
]


myMap([1,2,3], function(val){
    return val*3;
})

function myMap( arr, callback){
    const mappedArray = [];
    for (let i=0; i<arr.length; i++){
        const val=callback(arr[i], i, arr);
        mappedArray.push(val);
    }
    return mappedArray;
}

const priorityMap = myMap(todos, function(todo){
    return todo.priority;
})

const repeatedStrings=myMap(['a','b','c','d','e'], function(str, idx){
    return str.repeat(idx)
})

/////////////////////////////////////////////////////////////////////////////////////

const words = [
    'imunity',
    'prosperity',
    'happiness',
    'computer',
    'interface',
    'crypto'
];


const containsVowel = function(word){
    for (let char of word){
        if (isVowel(char)) return true;
    }
    return false;
}
const isVowel = function(char){
    return 'aeiou'.indexOf(char) !==-1;
}

const longWords = words.filter(function(word){
    if (word.length >= 8){
        return true;
    }
    else{
        return false;
    }
});
const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function(word){
    return !containsVowel(word);
});


//////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
    return arr.some(function(val){
        return val % 2 !==0;
    })
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {
    return num.toString().split('').some(function(val){
        return val === '0';
    })
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
    return !arr.some(function(val){
        return val % 2 === 0;
    })
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
    return !arr.some(function(val, index) {
        return arr.indexOf(val) !== index;
    });
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {
    return arr.every(function(val){
        return key in val 

    })
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(val){
        return val[key] === searchValue;

    })
}