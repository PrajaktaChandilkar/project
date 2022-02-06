//  let form = document.getElementById('form')
//  let input = document.getElementById('input')
//  todosUl = document.getElementById('todos')

//  const todos = [
//      {
//          text: "ABC",
//          completed : true,

//      },
//      {
//          text: "DEF",
//          completed: false
//      }
//  ]

//  //if todo present
//  if(todos){
//      todos.forEach(todo => addTodo(todo))
//  }
 
//  //get todos text
//  function addTodo(todo){
//     let todoText;
//     if(todo){
//         todoText = todo.text
//         console.log(todo.text)
//     }

   
//     //update todos text from from object and add one li tag 
//    if(todoText){
//        let todoText
//    }
//     if(todoText){
//         const todoEl = document.createElement("li")
//         if(todo && todoText.completed){
//             todoEl.classList.add("complete")
//         }
//         todoEl.innerText = todoText
//         todosUl.appendChild(todoEl)
//     }
    
//  } 


   
// const form = document.getElementById("form")
// const input = document.getElementById("input")
// const todosUL = document.getElementById("todos")

// const todos = JSON.parse(localStorage.getItem("todosString"))

// if(todos){
//     todos.forEach(todo=> addTodo(todo))
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
    
//     addTodo()
// })
// function addTodo(todo){
//     let todoText = input.value;
//     if(todo){
//         todoText = todo.text
//     }


//     if(todoText){
//         const todoEl = document.createElement("li")

//         if(todo && todo.isCompleted){
//             todoEl.classList.add("completed")
//         }
//         todoEl.innerText = todoText

//         todoEl.addEventListener("click",()=>{
//             todoEl.classList.toggle("completed")
//             updateLS()
//         })

//         todoEl.addEventListener("contextmenu",(e)=>{
//             e.preventDefault()

//             todoEl.remove()
//             updateLS()
//         })
//         todosUL.appendChild(todoEl)
//         input.value=''

//         updateLS()
//     }

// }

// function updateLS(){
//     const todosEls = document.querySelectorAll("li")

//     const todos = []

//     todosEls.forEach(todoEl=>{
//         todos.push({
//             text: todoEl.innerText,
//             isCompleted: todoEl.classList.contains("completed")
//         })
//     })

//     localStorage.setItem("todosString",JSON.stringify(todos))
// }
