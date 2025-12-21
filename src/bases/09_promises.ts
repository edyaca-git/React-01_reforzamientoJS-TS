

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5; // decide aleatoriamente resolve o reject
        if (success) {
            resolve('Promesa resuelta exitosamente');
        } else {
            reject('Promesa rechazada: ocurrió un error');
        }
    }, 2000);
});

myPromise.then((message) => {
    console.log({ message });
})
.catch((error) => {
    console.error({ error });
});

