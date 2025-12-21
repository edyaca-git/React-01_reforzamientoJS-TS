

const batman = {
    firstName: 'Bruce',
    lastName: 'Wayne',  
    age: 35,
    address: {
        street: 'Main St',
        number: 123,
        city: 'Gotham',
        zip: '12345'
    }
};
console.log({batman});

const spiderman = structuredClone(batman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';  
spiderman.age = 31;
spiderman.address.street = 'Queens St';
spiderman.address.number = 456;
spiderman.address.city = 'New York';
spiderman.address.zip = '67890';

console.log({batman}, {spiderman});

// ahora lo haremos con una interfaz

interface Persona {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    street: string;
    number: number;
    city: string;
    zip: string;
}

const superman: Persona = {
    firstName: 'Clark',
    lastName: 'Kent',
    age: 35,
    address: {
        street: 'Main St',
        number: 123,
        city: 'Metropolis',
        zip: '12345'
    }
};

//tip si solo escribes const ironman: Persona = { y CTRL + . te autocompleta la interfaz
const ironman: Persona = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45
};

console.log({superman}, {ironman});