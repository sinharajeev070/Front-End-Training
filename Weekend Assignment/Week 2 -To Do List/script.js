
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const delBtn = document.querySelector(".todoList span");
const list = document.querySelector(".todoList");
const clearBtn = document.querySelector(".footer button");

listArr = [];
inputBox.onkeyup = () => {
    let data = inputBox.value;
    if(data.trim()!=0){
        addBtn.classList.add("active");
        addBtn.onclick = () => {
            listArr.push(data);
            showTasks();
        }
    }
    else{
        addBtn.classList.remove("active");  
    }
}


function showTasks(){
    let liTag = '';
    listArr.forEach((elements,index)=>{

        liTag += '<li>' + elements + '<span onclick = deleteTask('+ index +')>x</span></li>';
        
    });

    list.innerHTML = liTag;
    inputBox.value="";
    addBtn.classList.remove("active");

    if(listArr.length > 0){
        clearBtn.classList.add("active");
    }
    else{
        clearBtn.classList.remove("active");
    }
}

function deleteTask(index){
    listArr.splice(index,1);
    showTasks();
}

clearBtn.onclick = () =>{
    listArr = [];
    showTasks();
}


