import fs from "fs";
async function multiplicar(base = 5, listar = false) {
    try {
        let salida = "";
        for (let index = 1; index <= 10; index++) {
            salida += `${base}x${index} = ${base * index}\n `;
        }
        if (listar === true) {
            console;
            console.log("---------------------");
            console.log(`tabla del ${base}`);
            console.log(salida);
            console;
            console.log("---------------------");
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla${base}.txt creado correctamente`;
    }
    catch (error) {
        console.log(error);
    }
}
export default multiplicar;
