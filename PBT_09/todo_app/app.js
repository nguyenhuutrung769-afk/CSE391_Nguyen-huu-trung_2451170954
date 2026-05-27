function createTodoApp() {
    let todos = JSON.parse(localStorage.getItem("todos") || "[]");
    let filter = "all";

    const todoList = document.querySelector("#todoList");
    const todoForm = document.querySelector("#todoForm");
    const todoInput = document.querySelector("#todoInput");
    const countSpan = document.querySelector("#count");
    const clearBtn = document.querySelector("#clearCompleted");
    const navButtons = document.querySelectorAll("nav button");

    function save() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    function render() {
        todoList.innerHTML = "";
        let filtered = todos.filter(t =>
            filter === "all" ? true :
                filter === "active" ? !t.completed :
                    t.completed
        );
        filtered.forEach(todo => {
            const li = document.createElement("li");
            li.className = "todo-item" + (todo.completed ? " completed" : "");
            li.dataset.id = todo.id;

            const span = document.createElement("span");
            span.textContent = todo.text;

            const delBtn = document.createElement("button");
            delBtn.textContent = "❌";

            li.appendChild(span);
            li.appendChild(delBtn);
            todoList.appendChild(li);
        });
        countSpan.textContent = `${todos.filter(t => !t.completed).length} items left`;
    }

    todoForm.addEventListener("submit", e => {
        e.preventDefault();
        const text = todoInput.value.trim();
        if (!text) return;
        todos.push({ id: Date.now(), text, completed: false });
        todoInput.value = "";
        save(); render();
    });

    todoList.addEventListener("click", e => {
        const li = e.target.closest("li");
        if (!li) return;
        const id = Number(li.dataset.id);
        if (e.target.tagName === "BUTTON") {
            todos = todos.filter(t => t.id !== id);
        } else if (e.target.tagName === "SPAN") {
            const todo = todos.find(t => t.id === id);
            todo.completed = !todo.completed;
        }
        save(); render();
    });

    todoList.addEventListener("dblclick", e => {
        const li = e.target.closest("li");
        if (!li || e.target.tagName !== "SPAN") return;
        const id = Number(li.dataset.id);
        const todo = todos.find(t => t.id === id);

        const input = document.createElement("input");
        input.value = todo.text;
        li.replaceChild(input, e.target);
        input.focus();

        input.addEventListener("keydown", ev => {
            if (ev.key === "Enter") {
                todo.text = input.value.trim();
                save(); render();
            }
        });
    });

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            navButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filter = btn.dataset.filter;
            render();
        });
    });

    clearBtn.addEventListener("click", () => {
        todos = todos.filter(t => !t.completed);
        save(); render();
    });

    render();
}

createTodoApp();
