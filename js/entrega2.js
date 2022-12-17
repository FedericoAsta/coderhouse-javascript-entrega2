
console.log("Entrega 2 | Federico Asta")

/*
CASO ECOMMERCE

* TODO TIENE QUE ESTAR DENTRO DE FUNCIONES
* LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY
* EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:
    - id --> number
    - producto --> nombre del producto
    - precio --> number
    - fechaVencimiento (en el caso de que tenga una) ---> string
    - descripción --> string
    - categoría (si tiene una) ---> string
    - oferta (booleano) --> true o false

Quiero que algunos de los elementos tengan un true en oferta.

2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).
Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos: 
    - [...array] ---> spread operator
    - array.slice() ---> copia segura en otra variable
    - [].concat(array) ---> copia segura en otra variable

4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert(). */


// 2)

function aplicarDescuento (array,descuento) {
    const arrayDescuento = array.map((elementoActual) => {
        const elementoCopiado = {...elementoActual}  // Se hace una copia del elemento para que no modifique el array original. 
        if (elementoCopiado.oferta === true) {
            elementoCopiado.precio = elementoCopiado.precio * (1 - (descuento/100))
        }
        return elementoCopiado
    })
    return arrayDescuento
}


//3

function ordenar (array,orden) {
    const arrayOrdenado = [...array]
    if (orden) {
        arrayOrdenado.sort((a,b) => {   
            if (a.producto < b.producto) {
                return -1  
            } else if (a.producto > b.producto) {
                return 1 
            } else {
                return 0  
            }
        })
    } else if (!orden) {
        arrayOrdenado.sort((a,b) => {   
            if (a.producto > b.producto) {
                return -1  
            } else if (a.producto < b.producto) {
                return 1 
            } else {
                return 0  
            }
        })
    }
    return arrayOrdenado
}


//4 

function verOfertas (array) {
    let opcion = confirm("¿Quiere ver solo las ofertas de la tienda?")
    if (opcion === true) {
        const arrayFiltrado = array.filter((elemento) => !!elemento.oferta)   // Con el negado-negado incorporo el caso de que el input sea un string.
        return arrayFiltrado
    }
    return array
}

//5

function buscarProducto (array,producto) {
    const productoEncontrado = array.find((elemento) => elemento.producto === producto)
    return productoEncontrado
}


// Accion de los botones

const mostrarArrayVar = document.querySelector("#mostrarArray")
const aplicarDescuentoVar = document.querySelector("#aplicarDescuento")
const ordenarAZVar = document.querySelector("#ordenarAZ")
const ordenarZAVar = document.querySelector("#ordenarZA")
const verOfertasVar = document.querySelector("#verOfertas")
const form = document.querySelector("form")
const productoBuscadoVar = document.querySelector("#productoBuscado")

mostrarArrayVar.onclick = () => {
    console.log("Array de instrumentos musicales:")
    console.table(instrumentos)
}

aplicarDescuentoVar.onclick = () => {
    descuento = prompt("Cuanto descuento queres aplicar?");
    descuentoNum = parseFloat(descuento);
    if (descuentoNum <= 100 && descuentoNum > 0) {
        console.log("Tabla con descuentos aplicados:");
        console.table(aplicarDescuento(instrumentos,descuentoNum));
    } else {
        alert("Tenes que ingresar un numero menor a 100% de descuento.");
    }
}

ordenarAZVar.onclick = () => {
    console.log("Productos ordenados de A-Z:")
    console.table(ordenar(instrumentos,true))
}

ordenarZAVar.onclick = () => {
    console.log("Productos ordenados de Z-A:")
    console.table(ordenar(instrumentos,false))
}

verOfertasVar.onclick = () => {
    console.log("Listado de ofertas:")
    console.table(verOfertas(instrumentos))
}

form.onsubmit = () => {
    event.preventDefault()    
    if (productoBuscadoVar.value === "")  {
        alert("Tenes que escribir el nombre de un producto")
    } else if (buscarProducto(instrumentos,productoBuscadoVar.value) === undefined) {
        alert("El producto buscado no existe")
    } else {
        console.log("Producto Buscado:")
        console.table(buscarProducto(instrumentos,productoBuscadoVar.value))
    }
}