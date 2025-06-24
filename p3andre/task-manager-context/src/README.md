```markdown
# 📋 Gerenciador de Tarefas por Categoria

Aplicação React desenvolvida para a **Prova 3 – Laboratório de Desenvolvimento Web**, com foco em gerenciamento de tarefas usando **Context API**.

---

## 🚀 Funcionalidades

✅ Criação de categorias personalizadas  
✅ Adição de tarefas associadas a cada categoria  
✅ Marcar tarefas como **concluídas** (checkbox)  
✅ Visualização das tarefas **agrupadas por categoria**  
✅ Estado global com **React Context** para armazenar dados e funções

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ React
- 📦 React Context API
- 🧠 React Hooks (`useState`, `useContext`)
- 💄 CSS básico (inline)

---

## 🧱 Estrutura do Projeto
```

📁 src/
├── 📂 components/
│ ├── AddCategory.jsx # Formulário de nova categoria
│ ├── AddTask.jsx # Formulário de nova tarefa
│ ├── CategoryList.jsx # Exibe todas as categorias criadas
│ └── TaskList.jsx # Lista tarefas por categoria
├── 📂 context/
│ └── TaskContext.jsx # Contexto global com estado e funções
├── App.jsx # Componente principal da aplicação
└── main.jsx # Ponto de entrada da aplicação

````

---

## 💡 Como Usar

1. Instale as dependências (caso esteja usando Vite ou CRA):

```bash
npm install
````

2. Rode a aplicação:

```bash
npm run dev
# ou
npm start
```

---

## 🧪 Como Funciona

- **AddCategory**: digite o nome da categoria e clique em "Adicionar".
- **AddTask**: selecione uma categoria existente, digite a tarefa e adicione.
- **TaskList**: visualize as tarefas organizadas por categoria com checkbox.
- Marcar a caixa ✅ altera o estado da tarefa de **pendente** para **concluída** e vice-versa.

---

## 📷 Exemplo de Uso

```plaintext
[CATEGORIA: Estudos]
☐ Estudar React Context
☑ Revisar lógica booleana

[CATEGORIA: Casa]
☐ Lavar a louça
☐ Organizar documentos
```

---

## 👨‍🏫 Avaliação (Checklist da Prova)

| Critério                                            | Status |
| --------------------------------------------------- | ------ |
| Uso de Context API para estado global               | ✅     |
| Criação de categorias                               | ✅     |
| Adição de tarefas por categoria                     | ✅     |
| Marcar tarefa como concluída com checkbox           | ✅     |
| Agrupamento e visualização de tarefas por categoria | ✅     |
| Separação em componentes sugeridos                  | ✅     |

---

## 📎 Autor

**André Flávio de Oliveira**
Desenvolvedor React | Estudante de Desenvolvimento Web
📧 [13demaio198179@gmail.com](mailto:13demaio198179@gmail.com)
📱 (12) 99774-7981

---

```

```
