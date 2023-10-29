// import { createContext,useContext } from "react";

// export const TodoContext = createContext({
// todos : [
//   {
//     id : 1,
//     todo: "todo msg",
//     completed : false
//   }
// ],

// //  functionalities  have to do in main.jsx fie
// addTodo : (todo)=>{},
// updateTodo : (id , todo) =>{},
// deleteTodo : (id) =>{},
// toggleComplete : (id)=>{},

// })


// export const useTodo =()=>{
//   return useContext(TodoContext)
// }

// export const TodoProvider  = TodoContext.Provider



import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider