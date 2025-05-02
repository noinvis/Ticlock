let offset = 0;

const inc = function(){
    offset++;
    document.querySelector(".click").innerHTML = offset
}
const none = function(){
    offset = 0;
    document.querySelector(".click").innerHTML = offset
}