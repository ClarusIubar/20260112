// 필요한 요소(element)를 먼저 찾는다.
const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// [1] 저장 기능 : 데이터 창고(localstorage)
function saveTodos(){
    const todos = [];
    document.querySelectorAll('#todoList span').forEach(span => {
        todos.push(span.innerText);
    });
    localStorage.setItem('myTodos', JSON.stringify(todos));
}

function renderTodo(text){
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <div>
            <button onclick="editTodo(this)">수정</button>
            <button class="delete-btn" onclick="deleteTodo(this)">삭제</button>
        </div>
    `;
    todoList.appendChild(li);
}

// old version
// [2] Create : 추가 기능
// addBtn.onclick = function(){
//     const value = input.value.trim();
//     if (value === ""){
//         alert("내용을 입력해주세요.")
//         return
//     }

//     const li = document.createElement('li');
//     li.innerHTML = `
//         <span>${value}</span>
//         <button class="delete-btn" onclick="this.parentElement.remove()">삭제</button>
//     `;

//     todoList.appendChild(li);

//     input.value= "";
//     input.focus();

// };