/* 
    index.html 을 위한 js 파일 
*/

function substract(a, b) {
    if(a > b) {
        return a - b;
    } else {
        return b - a;
    }
}
function add(a, b, c = 10) {
    if(c !== undefined) {
        return a + b + c;
    }
    return a + b; 
}

function multiply(a, b) {
    return a * b;
}