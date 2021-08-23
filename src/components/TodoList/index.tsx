import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem";
import "./style.scss";
import { IStore, ITodo } from "../../store/types";

export const TodoList = () => {
  const todoList = useSelector((state: IStore) => state.todoList);

  return (
    <div className="todoList">
      {todoList.length === 0 ? (
        <h2>Add todo now!!!</h2>
      ) : (
        todoList.map((todoItem: ITodo) => {
          return <TodoItem key={todoItem.id} todoItem={todoItem} />;
        })
      )}
    </div>
  );
};
