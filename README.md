# Lista-de-tarefas
## Este projeto é uma aplicação web simples de Lista de Tarefas que permite ao usuário adicionar, marcar como concluída, excluir e limpar tarefas.

### Objetivo:
O objetivo principal é fornecer uma ferramenta funcional para gerenciar tarefas diárias, com uma interface intuitiva e recursos básicos, como marcar tarefas como concluídas com exclusão automática e limpar todas as tarefas com confirmação.

### Funcionalidades:

  - **Adicionar tarefas:**
      Insira uma nova tarefa pelo campo de texto e pressione Enter ou clique no botão "Adicionar".
  - **Concluir Tarefas:**
      Clique no botão "Concluir" para marcar uma tarefa como concluída (riscada) e excluí-la automaticamente da lista.
  - **Excluir Tarefas:**
      Clique no botão "Excluir" para remover uma tarefa sem marcá-la como concluída.
  - **Limpar Todas as Tarefas:**
      Clique no botão "Limpar Tarefas" para remover todas as tarefas, com uma confirmação para evitar exclusões acidentais.
  - **Persistência de Dados:**
      As tarefas são salvas no LocalStorage, mantendo-as disponíveis ao recarregar a página.
  - **Interface Responsiva:**
      O layout se adapta a diferentes tamanhos de tela, com opções empilhadas em dispositivos móveis.

### Tecnologias Utilizadas:

  - **HTML5**: Estrutura da página.
  - **CSS3**: Estilização do layout, com Flexbox para organização e media queries para responsividade.
  - **JavaScript**: Lógica para manipulação do DOM, gerenciamento de tarefas e integração com LocalStorage.
  - **LocalStorage**: Armazenamento local para persistência de dados

### Uso

  - **Adicionar uma tarefa**:
Digite o texto da tarefa no campo de entrada.
Pressione Enter ou clique no botão "Adicionar".
A tarefa aparecerá na lista abaixo com os botões "Concluir" e "Excluir".

  - **Concluir uma tarefa**:
Clique no botão "Concluir" ao lado da tarefa.
A tarefa será marcada como concluída e removida automaticamente.

  - **Excluir uma tarefa**:
Clique no botão "Excluir" para remover a tarefa sem marcá-la como concluída.

  - **Limpar todas as tarefas**:
Clique no botão "Limpar Tarefas".
Confirme no pop-up para esvaziar a lista.

  - **Persistência**:
As tarefas são salvas automaticamente no LocalStorage.
Ao recarregar a página, as tarefas salvas aparecerão imediatamente.
