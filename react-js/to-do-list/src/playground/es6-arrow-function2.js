// argument object is no longer bound with arrow function

const add = function(a, b) {
    // if we change add function to arrow function
    // we can not use arguments keyword
    console.log(arguments);
    return a + b;
}
console.log(add(1, 2));

// this keyword is no longer bound with arrow function

const user1 = {
    name: 'user1',
    cities: ['Sunnyvale', 'Mountain View', 'Santa Clara'],
    dump: function() {
        let that = this;
        this.cities.forEach(function (city){
            console.log(that.name + ' live in '+city);
        }); 
    }
};
user1.dump();

const user2 = {
    name: 'user2',
    cities: ['Sunnyvale', 'Mountain View', 'Santa Clara'],
    dump: function () { // equal to function dump(...)
        this.cities.forEach( (city) => {
            console.log(this.name + ' live in '+ city);
        });
    }
}
user2.dump();

// note: what's the difference between forEach and map
// forEach is for in-place operation
// map can return a dup obj

const user3 = {
    name: 'user3',
    cities: ['Sunnyvale', 'Mountain View', 'Santa Clara'],
    dump: function(){
        return this.cities.map( (city, key) => {
            return this.name + ' live in ' + city;
        });
    }
}
const cityArr = user3.dump();
console.log(cityArr);

const user4 = {
    name: 'user4',
    cities: ['Sunnyvale', 'Mountain View', 'Santa Clara'],
    dump: function(){
        let that = this;
        return this.cities.map( function (city, key) {
            return that.name + ' live in ' + city;
        });
    }
}
const cityArr2 = user4.dump();
console.log(cityArr2);


const multiplier = {
    listA: [1, 2, 3, 4, 5],
    mul: 2,
    update: function(){
        let that = this;
        return that.listA.map((num, key) => {
            return num * that.mul;
        })
    }
};
console.log(multiplier.update());
