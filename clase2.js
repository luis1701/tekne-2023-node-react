// map, filter, find, reduce, etc.
// callback = una funcion que se envia como parametro a otra funcion

// spread operator => ...

const arrayA = [1, 2]
const arrayB = [3, 4]
const arrayC = [...arrayA, ...arrayB]
console.log(arrayC)

const objA = { name: "luis" }
const objB = { edad: 25 }
const objC = { ...objA, ...objB }
console.log(objC)


const array = [1, 2, 3, 4, 5, 6];

// Example
// input: [1, 2, 3, 4, 5, 6];
// output: [{valor: 1, indice: 0}, {valor: 2}, {valor: 3},... ];


// Example for reduce
// input: [1, 2, 3, 4, 5, 6];
// output: 21;

// Example for reduce 2
// input: [1, 2, 3, 4, 5, 6];
// output: { '0': 1, '1': 2, ... };


function tranformArrayUsingMap(initialArray) {
    const newArray = initialArray.map((value, index) => {
        return {
            valor: value,
            indice: index,
            tipo: typeof value,
            esPar: value % 2 === 0
        }
        // return value % 2 === 0
    })
    return newArray;
}

function tranformArrayUsingFilter(initialArray) {
    const newArray = initialArray.filter((value, index) => {
        return value < 100;
    });
    return newArray;
}

function tranformArrayUsingFind(initialArray) {
    const valueFinded = initialArray.find((value, index) => {
        return value === 22;
    });
    return valueFinded;
}

function tranformArrayUsingReduce(initialArray) {
    const result = initialArray.reduce((acc, value, index) => {
        return [...acc, { [index]: value }];
    }, []);
    return result;
}


const respuestaMap = tranformArrayUsingMap(array);
console.log(respuestaMap);

const respuestaFilter = tranformArrayUsingFilter(array);
console.log(respuestaFilter);

const respuestaFind = tranformArrayUsingFind(array);
console.log(respuestaFind);

const respuestaReduce = tranformArrayUsingReduce(array);
console.log(respuestaReduce);





// function callback(params) {
    
// }