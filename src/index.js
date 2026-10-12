#!/usr/bin/env node

// Camada de Entrada, onde lê o que o usuário digitou, escolhe o comando, executa e exibir

const {carregar, salvar} = require('./armazenamento');
const comandos = require('./comando');
const {ErroDeUsabilidade} = require('./erro');

const FILTROS = {'--pendentes' : 'pendente', '--concluidas' : 'concluida'};

function filtroTarefa(args){
    if(args.length === 0) return undefined;

    const filtro = FILTROS[args[0]];

    if(!filtro){
        throw new ErroDeUsabilidade(`Opção invalida: "${args[0]}". Use --pendentes ou --concluidas.`);
    }
    return filtro;
};

const TABELA = {
    adicionar: (estado, args) => comandos.adicionarTarefa(estado, args.join(' ')),
    listar: (estado, args) => comandos.listarTarefa(estado, filtroTarefa(args)),
    concluir: (estado, args) => comandos.concluirTarefa(estado, args[0]),
    remover: (estado, args) => comandos.removerTarefa(estado, args[0]),
    editar: (estado, args) => comandos.editarTarefa(estado, args[0], args.slice(1).join(' ')),
};

function main(argumentos){
    const [nome, ...args] = argumentos;

    const iniciar = TABELA[nome];
    if(!iniciar){
        console.error(`Comando inválido "${nome}".`);
        return 1;
    };

    try{
        const estado = carregar();
        const resultado = iniciar(estado, args);
        
        if(resultado.estado !== estado) salvar(resultado.estado);
        console.log(resultado.mensagem);
        return 0
    } catch (erro){
        const prefixo = erro instanceof ErroDeUsabilidade ? 'Erro' : 'Erro Inesperado';
        console.error(`${prefixo}: ${erro.message}`);
        return 1;
    };
};

process.exitCode = main(process.argv.slice(2));