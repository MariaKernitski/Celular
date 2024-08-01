const prompt = require("prompt-sync")();

const {criar, listar, atualizar, remover} = require("./crud.js");

console.log("Bem vindo(a) ao cadastro de celulares! :)");

while(true) {

    console.log(`
        Digite:
        '1' para adicionar um celular;
        '2' para listar os celulares;
        '3' para atualizar um celular;
        '4' para remover um celular;
        '5' para sair.
        `)
    const opção = prompt("");

    switch(opção) {
        case "1": criar();
        break;
        case "2": listar();
        break;
        case "3": atualizar();
        break;
        case "4": remover();
        break;
        case '5': console.log("Até logo!")
                  process.exit(); 
        break;
        default: console.log("Opção inválida.")
        break;
    }
}