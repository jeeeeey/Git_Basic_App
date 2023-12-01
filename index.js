/* 
    index.html 을 위한 js 파일 
*/
function add(a, b, c) {
    if(c !== undefined) {
        return a + b; 
    }
}

function substract(a, b) {
    if(a > b) {
        return a - b;
    } else {
        return b - a;
    }
}