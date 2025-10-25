// Inicializa o array de tarefas, carregando do LocalStorage ou usando um array vazio
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Função para adicionar uma tarefa
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Este campo não pode permanecer em branco.");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = '';
    saveTasks();
    renderTasks();
}

// Função para alternar o status de concluído (mantida para referência, mas não usada diretamente)
function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
}

// Função para marcar como concluída e excluir a tarefa
function completeAndDeleteTask(id) {
    // Marca a tarefa como concluída
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: true } : task
    );
    // Remove a tarefa
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// Função para excluir uma tarefa
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// Função para limpar todas as tarefas
function clearTasks() {
    if (confirm('Tem certeza que deseja limpar todas as tarefas?')) {
        tasks = [];
        saveTasks();
        renderTasks();
    }
}

// Função para renderizar as tarefas na lista
function renderTasks() {
    const taskList = document.getElementById('taskList');
    if (!taskList) {
        console.error('Elemento #taskList não encontrado no DOM');
        return;
    }
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="complete-btn" onclick="completeAndDeleteTask(${task.id})">Concluir</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Excluir</button>
        `;
        taskList.appendChild(li);
    });
    console.log('Tarefas renderizadas:', tasks);
}

// Função para salvar tarefas no LocalStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Tarefas salvas no LocalStorage:', tasks);
}

// Renderiza as tarefas quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado, inicializando tarefas...');
    renderTasks();
});

// Adiciona evento para tecla Enter
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});