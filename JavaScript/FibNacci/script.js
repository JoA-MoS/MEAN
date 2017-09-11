function fib() {
    // Some variables here
    var fcount = 0;
    var ncount = 1;
    function nacci() {
        let sum;
        sum = ncount + fcount;
        console.log(sum);
        ncount = fcount;
        fcount = sum;

    }
    return nacci;
}
var fibCounter = fib();
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "2"
fibCounter(); // should console.log "3"
fibCounter(); // should console.log "5"
fibCounter(); // should console.log "8"
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "2"
fibCounter(); // should console.log "3"
fibCounter(); // should console.log "5"
fibCounter(); // should console.log "8"
