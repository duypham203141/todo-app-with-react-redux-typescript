import { toast } from "react-toastify";
import * as actionsAPI from "../api/getApi";
import * as actions from "./actions";
import { ITodo } from "./types";

export const getTodosThunk = () => {
  return async (dispatch: Function) => {
    try {
      const response = await actionsAPI.getTodosAPI();
      dispatch(actions.getTodos(response.data));
    } catch (error) {
      toast.error(error.message, { autoClose: 3000 });
    }
  };
};

export const addTodoThunk = (todo: ITodo) => {
  return async (dispatch: Function) => {
    try {
      await actionsAPI.postTodoAPI(todo);
      dispatch(actions.addTodo(todo));
    } catch (error) {
      toast.error(error.message, { autoClose: 3000 });
    }
  };
};

export const deleteTodoThunk = (id: number) => {
  return async (dispatch: Function) => {
    try {
      await actionsAPI.deleteTodoAPI(id);
      dispatch(actions.deleteTodo(id));
    } catch (error) {
      toast.error(error.message, { autoClose: 3000 });
    }
  };
};

export const updateTodoThunk = (todo: ITodo) => {
  return async (dispatch: Function) => {
    try {
      await actionsAPI.putTodoAPI(todo);
      dispatch(actions.updateTodo(todo));
    } catch (error) {
      toast.error(error.message, { autoClose: 3000 });
    }
  };
};

export const toggleTodoThunk = (todo: ITodo) => {
  return async (dispatch: Function) => {
    try {
      await actionsAPI.putTodoAPI(todo);
      dispatch(actions.toggleTodo(todo.id));
    } catch (error) {
      toast.error(error.message, { autoClose: 3000 });
    }
  };
};
