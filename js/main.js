// Preguntar si es mayor a 18 años //
const edadDelUsuario = parseInt(prompt("¿Cual es tu edad?"));
if (edadDelUsuario >= 18){
    alert("Eres mayor de edad");

// Solicitar Nombre de usuario //

function solicitarNombre() {
    let nombreIngresado = prompt("Ingresar Nombre y Apellido")
    alert("El nombre ingresado es: " + nombreIngresado)
}

solicitarNombre();

// Agegar productos
class Productos {
    constructor(bebida, precio, stock) {
      this.bebida = bebida.toUpperCase();
      this.precio = parseFloat(precio);
      this.stock = parseInt(stock);
    }
  }
  
  let CantidadArticulos = Number(prompt("Cuantas bebidas deseas agregar?"));
  const arrayBebibas = [];
  
  for (let i = 0; i<CantidadArticulos; i++) {
    arrayBebibas[i] = new Productos(
      prompt("Ingrese el nombre de la bebida: "),
      prompt("Ingrese el precio del producto: "),
      prompt("Ingrese el stock del producto: ")
    )
  }

  console.log(arrayBebibas);

  // Para agregar mas bebibas

  arrayBebibas.push("Campari")

  console.log(arrayBebibas);


} else {

    alert("Eres menor de edad");
}
