
const myArray: number[] = [1, 2, 3, 4, 5];

const miArray2 = structuredClone(myArray);
miArray2.push(6);
console.log({myArray}, {miArray2}  );