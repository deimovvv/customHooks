/* import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];

export const useTodo = () => {
    
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);
    


    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos])
  
    const handleNewTodo = (todo) => {
        const action = {
          type: '[TODO] Add todo',
          payload: todo
        }
  
        dispatchTodo(action) // le mando la action al reducer usando la funcion de dispatch...
    }
  
    const handleDeleteTodo = (id) => {
      dispatchTodo({
        type: '[TODO] Remove todo',
        payload: id
      })
    }
  
    const handleToggleTodo  = (id) => {
      dispatchTodo({
        type: '[TODO] Toggle todo',
        payload: id
      })
    }
  
    return {
          todos,
          handleNewTodo,
          handleToggleTodo,
          handleDeleteTodo
    }
}
 */