
document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function fetchTasks() {
        fetch('http://localhost:3000/tasks')
            .then(response => response.json())
            .then(tasks => {
                listContainer.innerHTML = '';
                tasks.forEach(task => {
                    let li = createTaskElement(task);
                    listContainer.appendChild(li);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    function createTaskElement(task) {
        let li = document.createElement("li");
        li.innerHTML = task.text;
        li.dataset.id = task.id;
        if (task.completed) {
            li.classList.add("checked");
        }
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        return li;
    }

    window.addTask = function() {
        if (inputBox.value === '') {
            alert("Please enter a task!");
        } else {
            fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputBox.value, completed: false }),
            })
            .then(response => response.json())
            .then(newTask => {
                let li = createTaskElement(newTask);
                listContainer.appendChild(li);
                inputBox.value = "";
            })
            .catch(error => console.error('Error:', error));
        }
    }

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            const taskId = e.target.dataset.id;
            const completed = !e.target.classList.contains("checked");
            fetch(`http://localhost:3000/tasks/${taskId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: completed }),
            })
            .then(response => response.json())
            .then(() => {
                e.target.classList.toggle("checked");
            })
            .catch(error => console.error('Error:', error));
        } else if (e.target.tagName === "SPAN") {
            const taskId = e.target.parentElement.dataset.id;
            fetch(`http://localhost:3000/tasks/${taskId}`, {
                method: 'DELETE',
            })
            .then(() => {
                e.target.parentElement.remove();
            })
            .catch(error => console.error('Error:', error));
        }
    });

    inputBox.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    fetchTasks();
});