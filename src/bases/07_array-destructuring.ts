

const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ p1 ] = characterNames;;

console.log({ p1 });

const [ , , p3 ] = characterNames;  

console.log({ p3 });

const returnsArraysFn = () => {
    return [ 'ABC', 123 ] as const;
}
const [ letters, numbers ] = returnsArraysFn();

console.log({ letters, numbers });


const useState = (name: string) => {
    return [ name, (newName: string) => {
        console.log({ newName });
    },    
   ] as const;
}




const [ name, setName ] = useState('Goku');
console.log({ name })
setName('Vegeta');