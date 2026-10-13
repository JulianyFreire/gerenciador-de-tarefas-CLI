// Painel de central, para ajuda dos comandos e funcionamento do sistema

function painelAjuda(){
    return `LISTA DE COMANDOS - GERENCIADOR DE TAREFAS

Como utilizar:
  node src/index.js <comando> [argumentos]
  tarefas <comando> [argumentos]      (depois de rodar "npm link")

Comandos:
  adicionar <descrição>           Adiciona uma tarefa
  listar [--pendentes]            Lista as tarefas (todas, ou só as
         [--concluidas]           pendentes / concluídas)
  concluir <id>                   Marca a tarefa como concluída
  editar <id> <nova descrição>    Altera a descrição de uma tarefa
  remover <id>                    Remove a tarefa
  ajuda                           Mostra esta lista de comandos

Exemplos:
  node src/index.js adicionar "Estudar Git"
  node src/index.js listar --pendentes
  node src/index.js concluir 1`;
};

module.exports = {painelAjuda};