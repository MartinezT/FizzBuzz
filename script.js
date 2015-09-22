var body = $('body');
var append = function (word) {
    body.append('<div>' + word + '</div>');  
};
for(var i=1; i<=100; i++){
    if(i%15 === 0){
        append('FizzBuzz');
    }
    else if(i%3===0) {
        append("Fizz");
    }
    else if (i%5===0){
        append("Buzz");
    }
    else {
        append(i);
    }
}
