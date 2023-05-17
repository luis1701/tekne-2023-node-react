// == o ===

// "2" == 2 => true
// "2" === 2 => false

const persona = {
    name: 'luis',
    edad: '25',
    ci: 6170030
}

console.log('nombre: ', persona['name'])
console.log('edad: ', persona.edad)
console.log('ci: ', persona.ci)


function calc(num1, num2, operator) {
    console.log(this)
    console.log('ahora suma')
    if (operator === '+') {
        return num1 + num2
    }
    console.log('ahora resta')
    if (operator === '-') {
        return num1 - num2
    }
    console.log('ahora division')
    if (operator === '/') {
        return num1 / num2
    }
    console.log('ahora multiplicacion')
    if (operator === '*') {
        return num1 * num2
    }
}

const calc = (num1, num2, operator) => {
    console.log(this)
    console.log('ahora suma')
    if (operator === '+') {
        return num1 + num2
    }
    console.log('ahora resta')
    if (operator === '-') {
        return num1 - num2
    }
    console.log('ahora division')
    if (operator === '/') {
        return num1 / num2
    }
    console.log('ahora multiplicacion')
    if (operator === '*') {
        return num1 * num2
    }
}



function calc1(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log('ahora suma')
            return num1 + num2
        case '-':
            console.log('ahora resta')
            return num1 - num2
        case '/':
            console.log('ahora division')
            return num1 / num2
        case '*':
            console.log('ahora multiplicacion')
            return num1 * num2
        default:
            return 'Operador no valido';
    }
}

function calc2(num1, num2, operator) {
    const calculadoraObjeto = {
        '+': function sumar() {
            return num1 + num2
        },
        '-': function sumar() {
            return num1 - num2
        },
        '/': function sumar() {
            return num1 / num2
        },
        '*': function sumar() {
            return num1 * num2
        }
    }


    const result = calculadoraObjeto[operator]();

    return result

}

const resultado = calc(2, 3, '*')


console.log("El resultado es:", resultado)

console.log('==================================')
const resultado2 = calc1(2, 3, '*')

console.log(resultado2)
console.log('==================================')
const resultado3 = calc2(2, 3, '*')
console.log(resultado3)