console.log("Obj Descructuring");

const person = {
    name: 'brady',
    age: 31,
    location: {
        city: 'sunnyvale',
        zipcode: '94087'
    }
};

const {name: firstName = 'unknown', age} = person;
const {city, zipcode: zip } = person.location;

console.log(`${firstName} is ${age} years old`);
console.log(`located at ${zip} ${city}`);

//

console.log("Arr Descructuring");

const address = ['1234 Abc Street', 'Sunnyvale', 'CA', '94087'];
const [street2, city2, state2, zip2, dunno2='HA'] = address;
console.log(`${street2} ${city2} ${dunno2}`);