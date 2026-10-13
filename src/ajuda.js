// Painel de central, para ajuda dos comandos e funcionamento do sistema

function painelAjuda(){
    return `
    LISTA DE COMANDOS - TAREFAS
    
    Como utilizar:
    node src/index.js <comando> [argumentos] 
    ou
    "tarefas <comando>" [argumentos] || com npm link instalado

    Comandos: 
    adicionar <descrição> | Adiciona uma tarefa
    listar  [--pendentes] ou [--concluidas] | Lista de tarefas pendentes ou concluídas
    concluir <id>   | Marca como concluída 
    remover <id>    | Remove 
    editar <id> <nova descrição>    | Altera a descrição  
    ajuda   | Exibir os comandos necessários para acesso 
    
    Exemplos:
    tarefas adicionar "Estudar Git"
    tarefas listar --pendentes
    tarefas concluir 1
    `;
};

module.exports = {painelAjuda}; 