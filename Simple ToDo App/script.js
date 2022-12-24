
// UL having id todo-box and input having id as items are selected here 
const items = document.querySelector('#items');
const todoBox = document.querySelector('#todo-box');


// items has been added an eventlistener to get the value that has been written in the input  
items.addEventListener(
    'keyup',
    function (event) {
        // console.log(event.key)
        if (event.key === "Enter") {
            addTodo(this.value)
            this.value = '';
        }
    }
)

// This function is creating a li that will added the value written in the input field, and upon clicking it will perform strikethrough on the list and upon clicking on the cross mark it will remove the whole list from the box

const addTodo = (item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    ${item}
    <i class="fa-solid fa-square-xmark"></i>
    `;

    listItem.addEventListener('click',
        function () {
            this.classList.toggle('done');
        })

    listItem.querySelector("i").addEventListener('click',
        function () {
            listItem.remove()
        })

    todoBox.appendChild(listItem)
}
