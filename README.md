
# Gerenciador de Tarefas CLI

## Sobre
Aplicação foi desenvolvida em **Node.js** para cadastrar, listar, concluir, editar e remover tarefas. O projeto utiliza armazenamento local em JSON, permitindo manter os dados salvos entre diferentes execuções, sem depender de um banco de dados externo.

### Funcionalidades
- **Adicionar tarefas:** cadastrar atividades com descrição.
- **Listar tarefas:** visualizar as tarefas cadastradas.
- **Filtrar tarefas:** exibir apenas tarefas pendentes ou concluídas.
- **Concluir tarefas:** atualizar o status de uma atividade.
- **Editar tarefas:** alterar a descrição de uma tarefa existente.
- **Remover tarefas:** excluir tarefas cadastradas.
- **Validar entradas:** tratar descrições vazias, IDs inválidos e tarefas não encontradas.
- **Armazenar dados localmente:** salvar as informações em um arquivo JSON.
- **Exibir ajuda:** consultar os comandos disponíveis e suas instruções de uso.

## Tecnologias Utilizadas
- **Node.js** — execução da aplicação.
- **JavaScript** — implementação das funcionalidades e regras de negócio.
- **JSON** — armazenamento local dos dados.
- **Node.js Test Runner** — execução dos testes automatizados.

### Requisitos
Antes de executar o projeto, tenha instalado:

- [Node.js](https://nodejs.org/) — versão 20 ou superior.
- [Git](https://git-scm.com/), caso queira clonar o repositório.

### Instalação
Clone o repositório:

```bash
git clone https://github.com/JulianyFreire/gerenciador-de-tarefas-CLI.git
```

Entre na pasta do projeto:

```bash
cd gerenciador-de-tarefas-CLI
```

Instale as dependências:

```bash
npm install
```

## Como Usar
Para exibir a ajuda:

```bash
node src/index.js ajuda
```

Também é possível iniciar a aplicação com:

```bash
npm start
```

### Comandos disponíveis
#### 1. Adicionar tarefa
Cadastra uma nova tarefa com a descrição informada.

```bash
node src/index.js adicionar "Estudar JavaScript"
```

#### 2. Listar tarefas
Exibe as tarefas cadastradas.

```bash
node src/index.js listar
```

#### 3. Listar tarefas pendentes
```bash
node src/index.js listar --pendentes
```

#### 4. Listar tarefas concluídas
```bash
node src/index.js listar --concluidas
```

#### 5. Concluir tarefa
Informe o identificador da tarefa que deseja concluir.

```bash
node src/index.js concluir 1
```

#### 6. Editar tarefa
Informe o identificador e a nova descrição.

```bash
node src/index.js editar 1 "Revisar conceitos de JavaScript"
```

#### 7. Remover tarefa
Informe o identificador da tarefa que deseja remover.

```bash
node src/index.js remover 1
```

> **Observação:** os exemplos utilizam o ID `1`. Substitua-o pelo identificador real da tarefa cadastrada.

## Como foi o desenvolvimento
O projeto foi organizado em módulos para separar as responsabilidades e facilitar a manutenção do código, incluindo a entrada de comandos, as regras de negócio, o armazenamento dos dados, a formatação das informações e o tratamento de erros.

O armazenamento local em JSON permite salvar as tarefas sem precisar configurar um banco de dados externo. Além disso, o sistema valida as entradas e apresenta mensagens claras para situações como descrições vazias, IDs inválidos e tarefas não encontradas.

Durante o desenvolvimento, foi criada a branch test para experimentar funcionalidades e realizar testes manuais com o arquivo testeManual.js. Depois, foram realizados testes automatizados para verificar as principais funcionalidades e validações do sistema.

Essa organização ajudou a testar o comportamento da aplicação, identificar possíveis erros e manter o projeto estruturado e mais fácil de evoluir.

### Estrutura do Projeto
```text
gerenciador-de-tarefas-CLI/
├── src/
│   ├── index.js
│   ├── ajuda.js
│   ├── armazenamento.js
│   ├── comando.js
│   ├── erro.js
│   └── formatacao.js
├── data/
│   └── listaDeTarefas.json
├── teste/
│   └── comandos.test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

Cada módulo possui uma responsabilidade específica:

| Arquivo | Responsabilidade |
|---|---|
| `index.js` | Receber os argumentos da linha de comando e executar os comandos. |
| `ajuda.js` | Exibir as instruções de utilização. |
| `armazenamento.js` | Ler e salvar os dados localmente. |
| `comando.js` | Aplicar as regras de negócio das tarefas. |
| `erro.js` | Definir o tratamento de erros de utilização. |
| `formatacao.js` | Organizar a apresentação das informações. |
| `comandos.test.js` | Verificar as funcionalidades por meio de testes automatizados. |

### Armazenamento dos dados
As tarefas são armazenadas localmente no arquivo `data/listaDeTarefas.json`.

Cada tarefa possui os seguintes campos:

| Campo | Descrição |
|---|---|
| `id` | Identificador numérico da tarefa. |
| `descricao` | Texto que descreve a atividade. |
| `status` | Situação atual: `pendente` ou `concluida`. |
| `criadaEm` | Data e hora de criação no formato ISO. |

O estado geral também mantém o campo `proximoId`, utilizado para gerar o identificador da próxima tarefa.

O armazenamento em JSON mantém a solução simples e adequada a uma aplicação local, sem exigir um banco de dados externo.

### Testes automatizados
O projeto utiliza o test runner nativo do Node.js para verificar as funcionalidades e suas validações.

Entre os cenários de teste estão:

- Cadastro de tarefas e geração de identificadores.
- Validação de descrições vazias.
- Conclusão de tarefas.
- Validação de IDs.
- Edição de descrições.

Para executar os testes, utilize:

```bash
npm test
```

Confira o resultado no terminal e verifique se todos os testes passam antes de considerar a versão pronta para entrega.

## Próximos passos 
- Permitir a definição de prazos e prioridades para as tarefas.
- Implementar busca por palavras na descrição.
- Adicionar a opção de limpar todas as tarefas concluídas.