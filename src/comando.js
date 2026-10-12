// Funcionalidades de decisão do sistema, as funções recebem o estado atual e devolve um novo estado mais uma mensgem

const { ErroDeUsabilidade } = require('./erro');
const { formatacaoLinha } = require('./formatacao');

function adicionarTarefa(estado, descricao, agora = new Date()){
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

function listarTarefa(estado, filtro){
    const tarefas = filtro
        ? estado.tarefas.filter((t) => t.status === filtro)
        : estado.tarefas;

    if (tarefas.length === 0){
        const vazio = filtro ? 'Nenhuma tarefa encontrada.' : 'Nenhuma tarefa cadastrada.';
        return {estado, mensagem: vazio};
    }

    const largura = Math.max(...tarefas.map((t) => t.descricao.length));

    return {estado, 
        mensagem: tarefas.map((t) => formatacaoLinha(t, largura)).join('\n')
    };
};

function interpretacaoId(texto){
    if (texto === undefined){
        throw new ErroDeUsabilidade('Informe o Id da tarefa | Exemplo: tarefas concluir 1');
    }

    if (!/^\d+$/.test(texto)){
        throw new ErroDeUsabilidade(`${texto} não é um Id válido. Tente novamente, com um número inteiro`)
    }

    return Number(texto);
};

function buscarId(estado, id){
    const tarefa = estado.tarefas.find((t) => t.id === id);

    if (!tarefa){
        throw new ErroDeUsabilidade(`Tarefa #${id} não encontrada. Use (listar) para ver os ids.`);
    }
    return tarefa;
};

function concluirTarefa(estado, textoId){
    const id = interpretacaoId(textoId);
    const tarefa = buscarId(estado, id);

    if(tarefa.status === 'concluida'){
        return {estado, mensagem: `Tarefa #${id} já está concluída.`};
    }

    const tarefas = estado.tarefas.map((t) => (t.id === id ? {...t, status: 'concluida'} : t));
    return { estado: {...estado, tarefas}, mensagem: `Tarefa #${id} concluída.`};
};

function removerTarefa(estado, textoId){
    const id = interpretacaoId(textoId);
    buscarId(estado, id);

    const tarefas = estado.tarefas.filter((t) => t.id !== id);
    return {estado: {...estado, tarefas}, mensagem: `Tarefa #${id} removida.`};
};

function editarTarefa(estado, textoId, novaDescricao){
    const id = interpretacaoId(textoId);
    buscarId(estado, id);

    const texto = (novaDescricao || '').trim();

    if(!texto){
        throw new ErroDeUsabilidade('Informe a nova descrição. Exemplo: tarefas editar 1 "Novo texto".');
    }

    const tarefas = estado.tarefas.map((t) => (t.id === id ? {...t, descricao: texto} : t));
    return {estado :{...estado, tarefas}, mensagem: `Tarefa #${id} atualizada.`};
};

module.exports = {adicionarTarefa, listarTarefa, concluirTarefa, removerTarefa, editarTarefa};