// 1. 필요한 요소(element)를 먼저 찾는다.
const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// 2. Create : 추가 기능
addBtn.onclick = function(){
    const value = input.value.trim();
    if (value === ""){
        alert("내용을 입력해주세요.")
        return
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${value}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">삭제</button>
    `;

    todoList.appendChild(li);

    input.value= "";
    input.focus();

};