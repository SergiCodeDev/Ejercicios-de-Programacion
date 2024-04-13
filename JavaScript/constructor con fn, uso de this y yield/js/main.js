function CrearObjeto(numero) {
this.numero = numero;
    this.dobleFnMetodo = () => numero * 2;

    this[Symbol.iterator] = function* () {
        yield this.numero;
        yield this.dobleFnMetodo();
    };
}

const myObject = new CrearObjeto(20);

for (let valor of myObject) {
    console.log(valor);
}

function Estudiante(nombre, edad, apellido, notas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.notas = notas;
    this.media = () => {
       let resultado = 0;
       for (const valor of notas) {
        resultado += valor;
       }
       return resultado / notas.length;
    };
    this.saludar = () => {
        return `Buenas ${this.nombre} ${this.apellido} tus notas son ${this.notas} y tu media es de ${this.media()}, tu edad es ${this.edad}`
    }

    this[Symbol.iterator] = function* () {
        yield ['nombre', this.nombre];
        yield ['apellido', this.apellido];
        yield ['edad', this.edad];
        yield ['notas', this.notas];
        yield ['media', this.media()];
        yield ['saludar', this.saludar()];
    };
  }
  
  // Crear un nuevo estudiante usando el constructor con fn
  let juan = new Estudiante(nombre = "Juan", edad = 20, apellido = "Oliver", notas = [9,8,5,7,10]);

  console.log(juan)

  for (const keyValue of juan) {
    console.log(keyValue[0] + " -> " + keyValue[1])
  }
