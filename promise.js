function sum(x) {
    return new Promise((resolve, reject) => {
        if (Number(x) == NaN || typeof x != "number") {
            reject('Digite um numero corretamente.');
        }
        setTimeout(() => {
            resolve (x + 500);
        }, 3000);
    })
    
}

///sum(10).then((resultado) => {
///    console.log(resultado);
///});

async function main() {
    try {
        const resultado = await sum(100);
        console.log(resultado);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

main()