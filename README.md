# gerenciador-de-tarefas-CLI

Aplicação de linha de comando desenvolvida em JavaScript com Node.js para cadastrar, organizar e acompanhar tarefas diretamente pelo terminal.

O sistema permite adicionar, listar, concluir, editar e remover tarefas, além de filtrar atividades pendentes ou concluídas. Os dados são armazenados localmente em um arquivo JSON, permitindo que as tarefas sejam preservadas entre diferentes execuções do programa.

## Funcionalidades 
* Adicionar tarefas: cadastra uma nova atividade com identificador único, descrição, status inicial e data de criação.
* Listar tarefas: exibe as tarefas cadastradas, seus identificadores, status e datas.
* Filtrar tarefas: permite visualizar somente tarefas pendentes ou concluídas.
* Concluir tarefas: altera o status de uma tarefa para concluída.
* Editar tarefas: atualiza a descrição de uma atividade existente.
* Remover tarefas: exclui uma tarefa cadastrada.
* Persistência de dados: salva as alterações em um arquivo JSON local.
* Validação de entradas: verifica descrições vazias, IDs inválidos e tarefas inexistentes.
* Painel de ajuda: apresenta os comandos disponíveis e exemplos de utilização.
* Testes automatizados: utiliza o test runner nativo do Node.js para verificar funcionalidades do sistema.

## Tecnologias utilizadas
* JavaScript: linguagem utilizada no desenvolvimento da aplicação.
* Node.js: ambiente de execução do JavaScript.
* CommonJS: sistema de módulos utilizado para organizar e compartilhar funcionalidades entre arquivos.
* JSON: formato utilizado para armazenar os dados localmente.
* Node.js Test Runner: ferramenta nativa para execução de testes automatizados.
* Git e GitHub: utilizados para versionamento e organização do projeto.

## Pré-requisitos
**Antes de executar o projeto, instale:**
* Node.js
* Git

Para conferir se estão instalados:
```
node --version
npm --version
git --version
```

## Instalação
Clone o repositório:
```
https://github.com/JulianyFreire/gerenciador-de-tarefas-CLI.git
```
Entre na pasta do projeto:
```
cd gerenciador-de-tarefas-CLI
```
Instale as dependências, caso existam:
```
npm install
```

## Como utilizar
**Execute os comandos a partir da pasta raiz do projeto.**
### 1 - Exibir a ajuda
```
node src/index.js
```
Ou utilize:
```
node src/index.js ajuda
```
O painel apresenta a lista de comandos disponíveis e exemplos de uso.

### 2 - Adicionar uma tarefa
```
node src/index.js adicionar "Estudar Git"
```
Exemplo de saída:
```
Tarefa #1 adicionada.
```
A nova tarefa recebe um ID, a descrição informada, o status pendente e a data de criação.

### 3 - Listar todas as tarefas
```
node src/index.js listar
```
Exemplo de saída:
```
[ ] #1 Estudar Git 13/10/2026
```
A marca [ ] representa uma tarefa pendente, enquanto [X] representa uma tarefa concluída. A data exibida corresponde à data de criação formatada.

### 4 - Listar tarefas pendentes
```
node src/index.js listar --pendentes
```
Exibe somente as tarefas com status pendente.

### 5 - Listar tarefas concluídas
```
node src/index.js listar --concluidas
```
Exibe somente as tarefas com status concluída.

### 6 - Concluir uma tarefa
```
node src/index.js concluir 1
```
Exemplo de saída:
```
Tarefa #1 concluída.
```
Substitua 1 pelo identificador da tarefa desejada.

### 7 - Editar uma tarefa
```
node src/index.js editar 1 "Estudar JavaScript"
```
Exemplo de saída:
```
Tarefa #1 atualizada.
```

### 8 - Remover uma tarefa
```
node src/index.js remover 1
```
Exemplo de saída:
```
Tarefa #1 removida.
```

### 9 - Tratar comandos inválidos
```
node src/index.js comando-invalido
```
Quando um comando não é reconhecido, o sistema apresenta uma mensagem de erro e orienta o usuário a consultar a ajuda.
_Os exemplos de saída são ilustrativos. Os IDs e as datas dependem dos dados e do momento da execução._

## Organização do projeto
A aplicação separa responsabilidades em módulos, facilitando a manutenção e a evolução do código.



