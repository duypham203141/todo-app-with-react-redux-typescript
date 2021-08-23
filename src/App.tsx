import { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTodosThunk } from "./store/thunk";
import { FilterListTodo } from "./components/FilterListTodo";
import { TodoList } from "./components/TodoList";
import { IStore } from "./store/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
toast.configure();

function App() {
  const loading = useSelector((state: IStore) => state.loading);
  const success = useSelector((state: IStore) => state.success);
  const todoList = useSelector((state: IStore) => state.todoListFilter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      toast.success(loading, { autoClose: 2000 });
    }
  }, [loading, success, todoList]);
  return (
    <div className="App">
      <div className="todo">
        <Header />
        <FilterListTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
