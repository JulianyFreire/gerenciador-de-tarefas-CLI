// Camada de Apresentação, transforma dados em texto para o terminal

function formatacaoData(iso){
    const data = new Date(iso);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');

    return `${dia}/${mes}/${data.getFullYear()}`;
};

function formatacaoLinha(tarefa, tamanhoDescricao) {
    const marca = tarefa.status === 'concluida' ? '[X]' : '[ ]';
    const descricao = tarefa.descricao.padEnd(tamanhoDescricao);

    return `${marca} #${tarefa.id} ${descricao} ${formatacaoData(tarefa.criadaEm)}`;
};

module.exports = {formatacaoData, formatacaoLinha};