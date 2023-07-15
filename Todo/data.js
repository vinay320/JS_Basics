const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];  //  if array exist it will grab it or will take empty array;

const clear=document.querySelector("#clear");

function renderTasks() {
  const taskList = document.querySelector("#list");
  taskList.innerHTML = "";

  for (const task of tasks) {
    const li = document.createElement("li");
    const div=document.createElement('div');
    div.innerText=task;
    const div1 = document.createElement("div");
    div1.innerHTML = `<button>Delete</button>`;
    const div2 = document.createElement("div");
    div2.style.display="flex";
    div2.style.justifyContent = "center";
    div2.style.alignItems = "center";
    div2.style.gap = "20px";
    div2.append(div);
    div2.append(div1);
    li.appendChild(div2);
    li.addEventListener('click',()=>
    {
      li.remove();
    })
    taskList.append(li);
  }
}

btn.addEventListener("click", () => {
  if (inp.value!= "") {
    tasks.push(inp.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    inp.value = "";
    renderTasks();
  }
  
});

clear.addEventListener('click',()=>
{
  tasks.length=0;
  localStorage.removeItem('tasks');
  renderTasks()
})

renderTasks();
