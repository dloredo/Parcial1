var num = Math.round(Math.random() * 10) + 1;

if (num >= 9 && num <= 10) {
    console.log(num);
    console.log("Sacaste A");


} else if (num == 8) {
    console.log(num);
    console.log("Sacaste B");


} else if (num == 7) {
    console.log(num);
    console.log("Sacaste C");


} else if (num == 6) {
    console.log(num);
    console.log("Sacaste D");

} else {
    console.log(num);
    console.log("Sacaste F");
}

let start = new Date().getTime(),
    output = 0
let end = new Date().getTime()

console.log(end - start);