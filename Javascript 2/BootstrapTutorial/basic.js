//$('.mathOutput').text("cheese");

let n = [20, 54, 82];
const x = 5;
const y = 2;

function isDivisible(n, x, y){
    if(n / x === 0){
        $('.mathOutput').text(n + " is divisible");
    }
    else if(n % y === 0){
        $('.mathOutput').text(n + " is divisible");
    }
    else{
        $('.mathOutput').text(`None are divisible`);
    }
}

n.forEach(isDivisible);