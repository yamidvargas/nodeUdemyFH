import yargs, { boolean, demandOption, options } from "yargs";
import multiplicar from "./helpers/multiplicar.js";
import argv from "./yards/yards.js";

console.clear()





multiplicar(argv.b,argv.l)
   .then(nombreDelArchivo=>{console.log(nombreDelArchivo,"creado")})
    .catch(erro =>{console.log(erro)} )