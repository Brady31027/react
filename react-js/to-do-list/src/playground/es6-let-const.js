// ** variable over-written

let var1 = '123';
// var var1 = '456'; // let & const var can't be re-declaration
console.log('let var:', var1);


// ** block scoping

const var2 = '123 456';
let var4;

if (var2) {
    var4 = var2.split(' ')[0];
    var var3 = var2.split(' ')[1]; 
}
// we can access var3 because var is function scoping, not block scoping
// but if we change var3 using let or const, it will be failed to compile
console.log('var3:', var3);
console.log('var4:', var4);