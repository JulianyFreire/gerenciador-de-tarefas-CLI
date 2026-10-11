const { ErroDeUsabilidade } = require('./erro');

function adicionar(estado, descricao, agora = new Date()){
    const texto = (descricao || '').trim();

    if (!texto){
        throw new ErroDeUsabilidade('Informe a descrição | Exemplo: tarefas adicionar "Estudar Git" ');
    }

    const tarefa = {
        id: estado.proximoId,
        descricao: texto,
        status: 'pendente',
        criadaEm: agora.toISOString(),
    };

    return {
        estado: {
            proximoId: estado.proximoId + 1,
            tarefas: [...estado.tarefas, tarefa]
        },
        mensagem: `Tarefa #${tarefa.id} adicionada.`,
    }
};

module.exports = {adicionar};