const test = require('node:test');
const assert = require('node:assert');
const comandos = require('../src/comando');
const {ErroDeUsabilidade} = require('../src/erro');

const vazio = () => ({proximoId: 1, tarefas: []});
const DATA_FIXA = new Date('2026-10-13T12:00:00Z');

function comTarefas(...descricoes) {
    let estado = vazio();
    for (const descricao of descricoes) {
        estado = comandos.adicionarTarefa(estado, descricao, DATA_FIXA).estado;
    }
    return estado;
}

function erroDeUsabilidade(textoEsperado) {
    return (erro) => {
        assert.ok(erro instanceof ErroDeUsabilidade, `esperava ErroDeUsabilidade, veio ${erro.name}`);
        assert.match(erro.message, textoEsperado);
        return true; 
    };
}

test('adicionar cria tarefa pendente com id 1 e data de criação', () => {
    const { estado, mensagem } = comandos.adicionarTarefa(vazio(), 'Estudar Git', DATA_FIXA);

    assert.strictEqual(estado.tarefas[0].descricao, 'Estudar Git');
    assert.strictEqual(estado.tarefas[0].status, 'pendente');
    assert.strictEqual(estado.tarefas[0].id, 1);
    assert.strictEqual(estado.tarefas[0].criadaEm, '2026-10-13T12:00:00.000Z');
    assert.strictEqual(mensagem, 'Tarefa #1 adicionada.');
});

test('listar sem tarefas mostra mensagem amigável', () => {
    assert.strictEqual(comandos.listarTarefa(vazio()).mensagem, 'Nenhuma tarefa cadastrada.');
});

test('concluir marca a tarefa como concluída', () => {
    const { estado, mensagem } = comandos.concluirTarefa(comTarefas('a'), '1');

    assert.strictEqual(estado.tarefas[0].status, 'concluida');
    assert.strictEqual(mensagem, 'Tarefa #1 concluída.');
});

test('remover com id inexistente lança erro claro', () => {
    assert.throws(() => comandos.removerTarefa(comTarefas('a'), '99'), erroDeUsabilidade(/não encontrada/));
});

test('editar troca a descrição da tarefa', () => {
    const { estado, mensagem } = comandos.editarTarefa(comTarefas('velho'), '1', 'novo texto');

    assert.strictEqual(estado.tarefas[0].descricao, 'novo texto');
    assert.strictEqual(mensagem, 'Tarefa #1 atualizada.');
});