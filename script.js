var append = function (word) {
    var div = document.createElement('div');
    var text = document.createTextNode(word);
    div.appendChild(text);
    document.body.appendChild(div);  
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
