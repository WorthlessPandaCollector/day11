array1 = ["strings go here", 1, 2, 69, 4.20, 420, true, true, "fr fr", false, "CrANE JuICE!!!!"];

// using .filters .sort .includes .map .forEach ,,,etc
// no For Loops
// log to console


// a)

let newArray = array1.filter(function(element){
    return typeof element === 'string';
});
console.log(newArray);

// let abcArray = newArray.sort();
// // .sort() defaults to alphabetical or numerical with no arguments taken

// console.log(abcArray);



// let abcArrayLong = newArray.sort((a,b) => a.localeCompare(b));

// console.log(abcArrayLong);

// //   OOOORRRR we could do dis...


let abcReallyLongArrayStuff = newArray.sort(function (a,b) {
    if(a > b){
        return 1;
    }
    if(a < b){
        return -1;
    }
    return 0;
});

console.log(abcReallyLongArrayStuff);


// b)

// new array consisting only numbers in array, then sort them descending

let numArray = array1.filter(function(element){
    return typeof element === 'number';
});


console.log(numArray);

let numArrayAsc = numArray.sort(function(a,b){
    if(a > b){
        return 1;
    } 
    if(a < b) {
        return -1;
    }
    return 0;
});


console.log(numArrayAsc);

let numArrayDesc = numArray.sort(function(a,b){
    if(a > b){
        return -1;
    }
    if(a < b){
        return 1;
    }
    return 0;
});

console.log(numArrayDesc);


// d)

const lowerCaseArray = newArray.map(a => a.toLowerCase());
console.log(lowerCaseArray);


