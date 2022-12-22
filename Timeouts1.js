

// let cooldownAvailable = true;

// function useAbility() {
//     if(!cooldownAvailable) return true;
//     console.log("using the cooldown");
//     cooldownAvailable = false;

//     const fiveSeconds = 5 * 1000;

//     setTimeout(function() {
//         cooldownAvailable = true;
//         console.log("cooldown is ready!");
//     }, fiveSeconds);
// }

// useAbility();


// function waitAsec(number){
//     const fiveSeconds = 5 * 1000;
//     setTimeout(function(){
//         console.log(number);
//     }
//     , fiveSeconds);
// }

// waitAsec(69);

function loop5seconds(number) {
    const fiveSeconds = 5 * 1000;
    setTimeout(function(){
        setTimeout(function(){
            loop5seconds(number);
        })
        console.log(number);
   
    }, fiveSeconds)
}
loop5seconds(69);