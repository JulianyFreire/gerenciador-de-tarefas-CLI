// Camada de Armazenamento, indentificação do JSON

const fs = require('node:fs'); // Módulo para ler e gravar arquivos
const path = require('node:path'); // Módulo para montar caminhos 
const { ErroDeUsabilidade } = require('./erro');

// Identificação para o arquivo ficar sempre na mesma pasta
const ARQUIVO_PADRAO = path.join(__dirname, '..', 'data', 'listaDeTarefas.json');

function caminhoDoArquivo(){
    return process.env.ARQUIVO_TAREFA || ARQUIVO_PADRAO;
}

function iniciar(){
    return {proximoID: 1, tarefas: []};
}

function carregar(){
    const caminho = caminhoDoArquivo();

    if(!fs.existsSync(caminho)){
        return iniciar();
    }

    try{
        const estado = JSON.parse(fs.readFileSync(caminho, 'utf-8'));

        if(!Array.isArray(estado.tarefas) || !Number.isInteger(estado.proximoID)){
            throw new Error('Formato Inválido')
        }
        return estado;
    } catch{
        throw new ErroDeUsabilidade(
            `O arquivo "${caminho}" NÃO foi possível ler. ` + 
            'Corrija o arquivo ou apague, para tentar novamente.'
        );
    }
}

function salvar(estado){
    const caminho = caminhoDoArquivo();

    fs.mkdirSync(path.dirname(caminho), { recursive: true });

    const temporario = `${caminho}.tmp`;
    
    fs.writeFileSync(temporario, JSON.stringify(estado, null, 2), 'utf-8');
    fs.renameSync(temporario, caminho);
}

module.exports = {carregar, salvar}; 