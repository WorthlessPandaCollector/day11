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
