

function greet(name : string): string {
    return `Hello, ${name.toUpperCase()}!!!`;
}

const greet2 = (name: string): string => {
    return `Hi, ${name.toUpperCase()}!!!`;
}

const greeting = greet('Eduardo');

const greeting2 = greet2('Kristopher');

console.log({greeting}, {greeting2}); 


function getuser(){
    return {
        id: 1,
        username: 'eduardo_123',
    };
}

const getuder2 =() => {
    return {
        id: 2,
        username: 'kristopher_456',
    };
}


const usr1 = getuser();
const usr2 = getuder2();

console.log({usr1}, {usr2});


const myNumbers: number[] = [1,2,3,4,5];

myNumbers.forEach( function (value){
    console.log({value});
}   );

myNumbers.forEach( (value) => {
    console.log({value});
}   );

myNumbers.forEach(console.log);