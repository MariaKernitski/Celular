// dono modelo marca cpu ram memoria mp camera

const prompt = require("prompt-sync")();

const celulares = [];

const modelo = () => {
    dono = prompt("Digite o nome do dono do celular: ");
    mod = prompt("Digite o modelo do celular: ");
    marca = prompt("Digite a marca do celular: ");
    cpu = prompt("Digite a CPU do celular: ");
    ram = prompt("Digite a memória RAM do celular: ");
    memoria = prompt("Digite a memória do celular: ");
    camera = prompt("Digite os megapixels da câmera do celular: ");

    if(
        dono != "" &&
        mod != "" && 
        marca != "" &&
        cpu != "" &&
        ram != "" &&
        memoria != "" &&
        camera != "" 
    ) {
        return {
        dono,
        mod, 
        marca,
        cpu,
        ram,
        memoria,
        camera 
        };
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
        Índice ${i + 1} :
        Dono: ${cel.dono}
        Modelo: ${cel.mod}
        Marca: ${cel.marca}
        CPU: ${cel.cpu}
        RAM: ${cel.ram}
        Memória: ${cel.memoria}
        Câmera: ${cel.camera}
        `)
    })
}

const atualizar = () => {
    listar();
    const indice = prompt("Digite o índice do celular que deseja atualizar: ") - 1;

    if(isNaN(indice)) {
        console.log("Índice inválido.")
    }
    else {
        const novo_cel = modelo();
        celulares[indice] = novo_cel;
        console.log("Celular atualizado com sucesso!");
    }
}

const remover = () => {
    listar();
    const indice = prompt("Digite o índice do celular que deseja remover: ") - 1;

    if(isNaN(indice)) {
        console.log("Índice inválido.")
    }
    else {
        celulares.splice(indice, 1);
        console.log("Celular removido com sucesso.")
    }
}

module.exports = {
    criar,
    listar,
    atualizar,
    remover
}