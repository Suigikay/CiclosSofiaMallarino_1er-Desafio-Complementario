
let cuadros = parseInt(prompt("¿Cuantos cuadros de San Martín vas a comprar? \n Ingrese un numero porfavor."));
let precio = 0;
for (let i = 0; i < cuadros; i++) {
    let precioIngresado = parseInt(prompt("Ingresar precio de cuadro" + i));
    precio += precioIngresado
}
console.log(precio)


let ingreso = prompt("Ingresa el nombre de algo que te hace feliz. \n Para salir ingresa CHAU");
while (ingreso != "CHAU") {
    console.log("Lo que al usuario le hace feliz es " + ingreso);

    ingreso = prompt("Ingresa el nombre de algo que te hace feliz. \n Para salir ingresa CHAU")
}