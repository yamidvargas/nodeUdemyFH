import yargs from "yargs"

const argv = yargs(process.argv.slice(2))
    .options("b", {
        alias: "base",
        type: 'number',
        default: 5,
        demandOption: true
    }).option("l",{
        alias: "listar",
        type: "boolean",
        default: "false",
        


    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "la base tiene que ser un numero"
        }
        return true
    })
    .argv;

    export default argv