let, const

scope

function sumar (num1, num2) {
    let x = 5;
    return num1 + num2
}

1. Tipos de datos primitivos:



- Números: Representan valores numéricos, enteros o con decimales. Por ejemplo:
```
let numeroEntero = 10;
let numeroDecimal = 3.14;
```

- Cadenas de texto: Son secuencias de caracteres. Por ejemplo:
```
let nombre = "Juan";
let mensaje = "Hola, ¿cómo estás?";
```

- Booleanos: Representan los valores verdadero o falso. Por ejemplo:
```
let esMayorDeEdad = true;
let esHombre = false;
```

- Undefined: Indica que una variable no tiene un valor definido. Por ejemplo:
```
let variableIndefinida;
console.log(variableIndefinida); // Output: undefined
```

- Null: Indica que una variable no tiene ningún valor. Por ejemplo:
```
let variableNula = null;
console.log(variableNula); // Output: null
```

- Symbol: Es un tipo de datos nuevo que se agregó en ECMAScript 6. Los símbolos son valores únicos e inmutables que se pueden usar como identificadores. Por ejemplo:
```
const simbolo1 = Symbol("simbolo1");
const simbolo2 = Symbol("simbolo2");
```

2. Tipos de datos complejos:

- Objetos: Representan una colección de propiedades y valores. Por ejemplo:
```
let persona = {
  nombre: "Juan",
  edad: 25,
  esEstudiante: true,
  ciInfo: {
    number: 6170030,
    extension: "LP",
    complemento: null
  }
};
```

- Arrays: Son objetos que representan una lista ordenada de elementos. Por ejemplo:
```
let listaNumeros = [1, 2, 3, 4, 5];
let listaNombres = ["Juan", "María", "Pedro"];
let customList = [1, "luis", false, null, undefined, {name: "luis"}]
```

- Funciones: Son objetos que contienen un bloque de código que se puede invocar en cualquier momento. Por ejemplo:
```
function sumar(a, b) {
  return a + b;
}
``` 

3. Tipos de datos especiales:

- NaN: Indica un valor no numérico. Por ejemplo:
```
let resultado = "Hola" / 2;
console.log(resultado); // Output: NaN
```

- Infinity: Indica un valor infinito positivo. Por ejemplo:
```
let numeroInfinitoPositivo = Infinity;
console.log(numeroInfinitoPositivo); // Output: Infinity
```

- -Infinity: Indica un valor infinito negativo. Por ejemplo:
```
let numeroInfinitoNegativo = -Infinity;
console.log(numeroInfinitoNegativo); // Output: -Infinity
```