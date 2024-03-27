let usergiventask = document.getElementById('taskinfo');
//let usergiventask = document.getElementById('taskin');
let tasklist = document.getElementById("tasklist");
let errormsg=document.getElementById('errormsg');

let Task = []
function add(){
    if(usergiventask.value.trim()==""){
        usergiventask.placeholder="Please enter any task";
    }
    else{
    
         //console.log(usergiventask.value);
         Task.push(usergiventask.value)
         console.log(Task);
         usergiventask.value="";
         displayTask()
         
    }

}

function displayTask(){
    tasklist.innerHTML="";
         Task.forEach((task,index)=>{
            let lst=document.createElement('li')
            lst.classList.add('lst')
            let icon = document.createElement('i')
            icon.classList.add('fa-solid','fa-delete-left')
            icon.onclick = ()=>{
                console.log(task)
                Task.splice(index,1);
                console.log(task)
                tasklist.innerHTML=""
                displayTask();
            }
            let divcontainer = document.createElement('div')
            divcontainer.classList.add('div')
            lst.innerHTML=Task;
            divcontainer.appendChild(lst)
            divcontainer.appendChild(icon)
            tasklist.appendChild(divcontainer)


         });
}
//accessing the user given  value
//it should not be empty
