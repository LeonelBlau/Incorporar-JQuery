
class Moneda{
    constructor(nombre, valor1, simbolos) {
        this.nombre = nombre;
        this.valor1   = valor1;
        this.simbolos = simbolos;
    }
}

                           
const moneda1 = new Moneda("Dolares", 0.0094, "USD");                          
const moneda2 = new Moneda("Pesos Uruguayos", 0.42, "$UR");                     
const moneda3 = new Moneda("Pesos Chilenos", 7.71, "$CH");                     
const moneda4 = new Moneda("Euros", 0.0083, "€");                     
const moneda5 = new Moneda("Libras", 0.0070, "£");                     
const moneda6 = new Moneda("Yenes", 1.09, "¥");                     
const moneda7 = new Moneda("Pesos Mexicanos", 0.20, "$MX");                     
                 

const Monedas = [moneda1, moneda2, moneda3,moneda4,moneda5,moneda6,moneda7];


$(document).ready(function(){

    $(".convertir").click(function(){

      let cambio = $(".aCambiar").val();
      let cantidad = $(".ingresoMonto").val();

      if (cambio == moneda1.nombre) { 
        let Resultado = Math.round(cantidad * moneda1.valor1 * 100) / 100;
           $(".resultadoDiv").html(cantidad + " $AR" + " = " + Resultado + " " + moneda1.simbolos)
      } else if (cambio == moneda2.nombre) { 
        Resultado = Math.round(cantidad * moneda2.valor1 * 100) / 100;
        $(".resultadoDiv").html(cantidad + " $AR" + " = " + Resultado + " " + moneda2.simbolos)
      } else if (cambio == moneda3.nombre) { 
        Resultado = Math.round(cantidad * moneda3.valor1 * 100) / 100;
        $(".resultadoDiv").html(cantidad + " $AR" + " = " + Resultado + " " + moneda3.simbolos)
      } else if (cambio == moneda4.nombre) { 
        Resultado = Math.round(cantidad * moneda4.valor1 * 100) / 100;
        $(".resultadoDiv").html(cantidad + " $AR" + " = " + Resultado + " " + moneda4.simbolos)
      } else if (cambio == moneda5.nombre) { 
        Resultado = Math.round(cantidad * moneda5.valor1 * 100) / 100;
        $(".resultadoDiv").html(cantidad + " $AR" + " = " + Resultado + " " + moneda5.simbolos)
      } else if (cambio == moneda6.nombre) { 
        Resultado = Math.round(cantidad * moneda6.valor1 * 100) / 100;
        $(".resultadoDiv").html(cantidad + " $AR" + " = " + Resultado + " " + moneda6.simbolos)
      } else if (cambio == moneda7.nombre) { 
        Resultado = Math.round(cantidad * moneda7.valor1 * 100) / 100;
        $(".resultadoDiv").html(cantidad + " $AR" + " = " + Resultado + " " + moneda7.simbolos)
      };

      
      
      
    });  
});    


