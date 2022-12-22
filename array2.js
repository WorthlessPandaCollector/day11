// create an array that has 5 objects 

const user1 = {
    name: "ryan",
    age: 70,
    isAdmin: true
}

const user2 = {
    name: "dixie",
    age: 1,
    isAdmin: false
}

const user3 = {
    name: "harley",
    age: 9,
    isAdmin: true
}

const user4 = {
    name: "gabe itches",
    age: .1,
    isAdmin: true
}

const user5 = {
    name: "Wen Bussin",
    age: 99,
    isAdmin: false
}

array = [user1, user2, user3, user4, user5];
console.log(array);
// a)
// create a new array consisting only of users that have
// age > 20
// const ageOver20 = array.filter(old => old.age>20);

// console.log(ageOver20);

// alternative:

const ageOver20 = array.filter(function(element){
    return element.age > 20;
});

console.log(ageOver20);


// b)
// isAdmin == true;

const adminArray = array.filter(function(element){
    return element.isAdmin == true;
});

console.log(adminArray);


// c)
// isAdmin == true && age < 50

const yungAndHung = array.filter(function(element){
    return element.isAdmin == true && element.age < 50;
});

console.log(yungAndHung);

// d)
// sort usernames alphabetically

const userAbc = array.sort((a,b) => a.name.localeCompare(b.name));

console.log(userAbc);

let userAbcd = array.sort(function(bung,hole){
    if(bung > hole){
        return 1;
    }
    if(bung < hole){
        return -1;
    }
    return 0;
});

console.log(userAbcd);

// not sure what is happening with userAbcd... but userAbc works correctly

// e 
// sorts by age, descending

let userAgeDesc = array.sort(function(a,b){
    if(a.age > b.age){
        return -1
    }
    if(a.age < b.age){
        return 1;
    }
    return 0;
});

console.log(userAgeDesc);

// also

let userAgeDescShort = array.sort((a,b) => b.age - a.age);
console.log(userAgeDescShort);
