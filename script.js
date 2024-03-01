const inputTask = document.querySelector("input[name='mainTask']");
const parent = document.querySelector("#parent");

inputTask.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputTask.value.trim() !== "") {
        const newTask = document.createElement("div");
        const circle=document.createElement("div");
        circle.classList.add("unchecked");
        newTask.classList.add("task");
        newTask.appendChild(circle);
        const taskText = document.createElement("span");
        taskText.innerText = inputTask.value.trim();
        newTask.appendChild(taskText);
        parent.appendChild(newTask);
        inputTask.value = "";
        circle.addEventListener("click",()=>{
            circle.innerHTML="&#10003";
            circle.classList.add("checked");
            const cross=document.createElement("span");
            cross.classList.add("cross");
            cross.innerHTML="&#10005;";
            taskText.appendChild(cross);
            cross.addEventListener("click",()=>{
                parent.removeChild(newTask);
            })
        })
       
    }
    


});
