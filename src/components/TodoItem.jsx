import React from "react";

export default function TodoItem({todo,deleteTodo,id}) {
  return (

      <div className="todo-item" >
        <p>{todo}</p>
        <i className="fas fa-times-circle" onClick={()=>{
            deleteTodo(id)
        }}></i>
      </div>
  
  );
}
