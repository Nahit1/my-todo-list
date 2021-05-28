import React from "react";
import "./List.css";

const List = ({todoList, removeItem, editItem}) => {
  return (
    <ul className="todoList">
      {todoList.map((item) => {
          const {id, title} = item;
          //object destructuring
        return (
          <li className="todoList-item" key={id}>
            {title}
            <ul className="todoList-icons">
              <li className="todoList-icon">
                <i onClick={()=>editItem(id)} className="fas fa-edit"></i>
              </li>
              <li className="todoList-icon">
                <i onClick={()=>removeItem(id)} className="fas fa-trash"></i>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
