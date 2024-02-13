window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-input');
    const newTaskInput = document.querySelector('#new-task-input');
    const listEl = document.querySelector('#tasks');
    const submitBtn = document.querySelector("#new-task-submit");

    submitBtn.addEventListener("click",(e)=>{
        e.preventDefault()

        const task = newTaskInput.value;
        // console.log(task)

          if(!task){
            alert("Input cant be empty")
            return;
          }

    const taskEl = document.createElement('Div');
    taskEl.classList.add("task")
    
    const contentEl = document.createElement("Div");
    contentEl.classList.add('content');

    taskEl.appendChild(contentEl);

    const inputEl = document.createElement('input');
    inputEl.classList.add('text');
    inputEl.type = "text";
    inputEl.value = task;
    inputEl.setAttribute("readonly","readonly");
    contentEl.appendChild(inputEl);

    listEl.appendChild(taskEl);

    const actionEl = document.createElement("div");
    actionEl.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerHTML = "EDIT"

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "DELETE";

    actionEl.appendChild(editBtn);
    actionEl.appendChild(deleteBtn);

    taskEl.appendChild(actionEl);


    newTaskInput.value = '';

    editBtn.addEventListener("click", ()=>{
        if(editBtn.innerText.toUpperCase() == "EDIT"){
            editBtn.innerText = 'SAVE';
            inputEl.removeAttribute("readonly");
            editBtn.focus();
        }else{
            inputEl.setAttribute("readonly", "readonly");
            editBtn.innerText = 'EDIT';
        }
    })

    deleteBtn.addEventListener('click', ()=>{
        listEl.removeChild(taskEl);
    })
        
    })
})

