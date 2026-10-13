function painelAjuda(){
    return `
    LISTA DE COMANDOS - TAREFAS
    
    Como utilizar: tarefas <comando> [argumentos]

    Comados: 
    adicionar <descrição> | Adiciona uma tarefa
    listar  [--pendentes] ou [--concluidas] | Lista de tarefas pendentes ou concluídas
    concluir <id>   | Marca como concluida 
    remover <id>    | Remove 
    editar <id> <nova descrição>    | Altera a descrição  
    ajuda   | Exibir os comandos necessarios para acesso 
    
    Exemplos:
    tarefas adicionar "Estudar Git"
    tarefas listar --pendentes
    tarefas concluir 1
    `;
};

module.exports = {painelAjuda}; 