const addButton = document.querySelector('.addButton');
const inputElement = document.querySelector('.new-todo');
const list = document.querySelector('.todoitems');

const showAllButton = document.querySelector('.show-all');
const showCompletedButton = document.querySelector('.show-completed');
const showPendingButton = document.querySelector('.show-pending');

let todoItemsArray = [];
let currentFilter = 'all';


addButton.addEventListener('click', addTodoItem);


showAllButton.addEventListener('click', function() {
    currentFilter = 'all';
    render();
});

showCompletedButton.addEventListener('click', function() {
    currentFilter = 'completed';
    render();
});

showPendingButton.addEventListener('click', function() {
    currentFilter = 'pending';
    render();
});

function render() {
    list.innerHTML = '';

    
    let filteredItems = [];
    for (let i = 0; i < todoItemsArray.length; i++) {
        if (currentFilter === 'completed' && todoItemsArray[i].done === true) {
            filteredItems.push(todoItemsArray[i]);
        } else if (currentFilter === 'pending' && todoItemsArray[i].done === false) {
            filteredItems.push(todoItemsArray[i]);
        } else if (currentFilter === 'all') {
            filteredItems.push(todoItemsArray[i]);
        }
    }

    for (let i = 0; i < filteredItems.length; i++) {
        const item = filteredItems[i];
        const divElement = document.createElement('div');
        const listElement = document.createElement('li');
        listElement.textContent = item.input;

        if (item.done) {
            listElement.style.textDecoration = 'line-through';
        }

        const toggleButton = document.createElement('button');
        toggleButton.textContent = item.done ? 'Undo' : 'Done';
        toggleButton.addEventListener('click', function() {
            for (let j = 0; j < todoItemsArray.length; j++) {
                if (todoItemsArray[j] === item) {
                    todoItemsArray[j].done = !todoItemsArray[j].done;
                    break;
                }
            }
            render();
        });

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            for (let j = 0; j < todoItemsArray.length; j++) {
                if (todoItemsArray[j] === item) {
                    todoItemsArray.splice(j, 1);
                    break;
                }
            }
            render();
        });

        divElement.appendChild(listElement);
        divElement.appendChild(toggleButton);
        divElement.appendChild(deleteButton);
        list.appendChild(divElement);
    }
}

function addTodoItem() {
    const input = inputElement.value;

    todoItemsArray.push({ input: input, done: false });
    inputElement.value = '';
    render();
}
