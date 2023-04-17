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