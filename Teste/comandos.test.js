const test = require('node:test');
const assert = require('node:assert');
const comandos = require('../src/comando');
const {ErroDeUsabilidade} = require('../src/erro');

const vazio = () => ({proximoId: 1, tarefas: []});

test('adicionar tarefa pendente com id 1', () => {
    const {estado, mensagem} = comandos.adicionarTarefa(vazio(), 'Estudar Git');

    assert.strictEqual(estado.tarefas[0].descricao, 'Estudar Git');
    assert.strictEqual(estado.tarefas[0].status, 'pendente');
    assert.strictEqual(estado.tarefas[0].id, 1);
    assert.strictEqual(mensagem, 'Tarefa #1 adicionada.');
});

test('informe a descrição | Exemplo: tarefas adicionar "Estudar Git"', () => {
    assert.throws(() => comandos.adicionarTarefa(vazio(), ''), ErroDeUsabilidade);
});

test('tarefa #id concluída.', () => {
    const e = comandos.adicionarTarefa(vazio(), 'a').estado;
    const r = comandos.concluirTarefa(e, '1');

    assert.strictEqual(r.estado.tarefas[0].status, 'concluida');
    assert.strictEqual(r.mensagem, 'Tarefa #1 concluída.');
});

test('não é um Id válido. Tente novamente, com um número inteiro', () => {
    assert.throws(() => comandos.concluirTarefa(vazio(), 'A'), );
    assert.throws(() => comandos.concluirTarefa(vazio(), '-1'), );
    assert.throws(() => comandos.removerTarefa(vazio(), undefined));
});

test('informe a nova descrição. Exemplo: tarefas editar 1 "Novo texto"', () => {
    const e = comandos.adicionarTarefa(vazio(), 'velho').estado;
    
    assert.strict(comandos.editarTarefa(e, '1', 'novo texto'). estado.tarefas[0].descricao, 'novo texto');
    assert.throws(() => comandos.editarTarefa(e, '1', ''), ErroDeUsabilidade);
});