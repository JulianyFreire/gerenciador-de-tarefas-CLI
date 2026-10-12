const c = require('../src/comando'); 

function tentar(descricao, fn) {
    try {
        console.log(descricao, '->', fn().mensagem);
    } catch (erro) {
        console.log(descricao, '-> ERRO:', erro.name + ':', erro.message);
    }
}

let estado = { proximoId: 1, tarefas: [] };

console.log('\n--- listar vazio ---');
console.log(c.listarTarefa(estado).mensagem);

console.log('\n--- adicionar duas tarefas ---');
let r = c.adicionarTarefa(estado, 'Estudar Git', new Date('2026-10-05T12:00:00Z'));
estado = r.estado;
console.log(r.mensagem);
r = c.adicionarTarefa(estado, 'Estudar Javascript', new Date('2026-10-06T12:00:00Z'));
estado = r.estado;
console.log(r.mensagem);

console.log('\n--- listar (colunas alinhadas) ---');
console.log(c.listarTarefa(estado).mensagem);

console.log('\n--- concluir #1 e filtrar ---');
estado = c.concluirTarefa(estado, '1').estado;
console.log('pendentes:\n' + c.listarTarefa(estado, 'pendente').mensagem);
console.log('concluidas:\n' + c.listarTarefa(estado, 'concluida').mensagem);

console.log('\n--- editar #2 ---');
estado = c.editarTarefa(estado, '2', 'Entregar o desafio').estado;
console.log(c.listarTarefa(estado).mensagem);

console.log('\n--- remover #1 e adicionar outra (id NAO pode repetir) ---');
estado = c.removerTarefa(estado, '1').estado;
estado = c.adicionarTarefa(estado, 'Nova tarefa').estado;
console.log(c.listarTarefa(estado).mensagem);

console.log('\n--- erros esperados ---');
tentar('adicionar vazio', () => c.adicionarTarefa(estado, '   '));
tentar('concluir "abc"', () => c.concluirTarefa(estado, 'abc'));
tentar('concluir sem id', () => c.concluirTarefa(estado, undefined));
tentar('concluir 99', () => c.concluirTarefa(estado, '99'));
tentar('remover 99', () => c.removerTarefa(estado, '99'));
tentar('editar vazio', () => c.editarTarefa(estado, '2', ''));
tentar('concluir de novo', () => c.concluirTarefa(c.concluirTarefa(estado, '2').estado, '2'));

console.log('\n--- imutabilidade ---');
const original = { proximoId: 1, tarefas: [] };
c.adicionarTarefa(original, 'x');
console.log('original continua vazio?', original.tarefas.length === 0);