const square = function(x) {
    return x * x;
}
const square2 = (x) => x * x;

const square3 = (x) => {
    return x * x;
}

console.log(square(10));
console.log(square2(10));
console.log(square3(10));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName("123 456"));
console.log(getFirstName2("456 789"));