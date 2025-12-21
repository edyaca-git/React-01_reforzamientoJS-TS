

const person ={
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

const names = person.name;
const ages = person.age;
const keys = person.key; 

console.log({ names, ages, keys });

const { name: heroName, age, key } = person;

console.log({ heroName, age, key });

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;  
}

const userContext = ({name, age, key, rank}: Hero) => {
    return {
        keyname: key,
        user: {
            name,
            age,
        },
        rank: rank
    };
};



const context = userContext( person );

console.log({ context });

// ahora destructuramos el resultado de la funcion
const { rank, keyname, user } = userContext( person );
// dentro de user destructuramos name   
const { name } = user;

console.log({ rank, keyname, name });