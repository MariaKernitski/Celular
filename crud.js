// dono modelo marca cpu ram memoria mp camera

const prompt = require("prompt-sync")();

const celulares = [];
const celular = {};

const modelo = () => {
    celular.dono = prompt("Digite o nome do dono do celular: ");
    celular.modelo = prompt("Digite o modelo do celular: ");
    celular.marca = prompt("Digite a marca do celular: ");
    celular.cpu = prompt("Digite a CPU do celular: ");
    celular.ram = prompt("Digite a memória RAM do celular: ");
    celular.memoria = prompt("Digite a memória do celular: ");
    celular.mp = prompt("Digite os megapixels da câmera do celular: ");

    if(
        celular.dono != "" &&
        celular.modelo != "" && 
        celular.marca != "" &&
        celular.cpu != "" &&
        celular.ram != "" &&
        celular.memoria != "" &&
        celular.mp != "" 
    ) {
        return celular;
    }
    console.log("Dados inválidos.");
}

const criar = () => {
    const novo = modelo();

    if(novo) {
        celulares.push(novo);
        console.log("Celular adicionado com sucesso!");
    }
}

const listar = () => {
    celulares.forEach((cel, i) => {
        console.log(`
        Dono: ${cel.dono}
        Modelo:
        Marca:
        CPU:
        RAM:
        Memória:
        Câmera:
        `)
    })
}