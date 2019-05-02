function myMessage() {
    console.log('This is myMessage function');
}

function add(num1, num2) {
    var result = num1 + num2;
    console.log(num1 + '+' + num2 + '=' + result);
}

function addWithReturn(num1, num2) {
    var result = num1 + num2;
    return result;
}

var addWithReturnResult = addWithReturn(40, 60 );

function cardFlip(clickedElement) {
    $(clickedElement).hide();
}