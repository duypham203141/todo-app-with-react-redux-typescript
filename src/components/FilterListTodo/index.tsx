import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/actions";
import { EStatus, IStore } from "../../store/types";
import "./style.scss";
import classNames from "classnames";
export const FilterListTodo = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: IStore) => state.filter);
  const todoList = useSelector((state: IStore) => state.todoListFilter);
  return (
    <div className="filter">
      <button
        className={classNames(" btn-filter", {
          btn__active: filter === EStatus.all,
        })}
        onClick={() => dispatch(setFilter(EStatus.all))}
      >
        All ({todoList.length})
      </button>
      <button
        className={classNames(" btn-filter", {
          btn__active: filter === EStatus.active,
        })}
        onClick={() => dispatch(setFilter(EStatus.active))}
      >
        Active ({todoList.filter((todo) => todo.isCompleted === false).length})
      </button>
      <button
        className={classNames(" btn-filter", {
          btn__active: filter === EStatus.complete,
        })}
        onClick={() => dispatch(setFilter(EStatus.complete))}
      >
        Completed ({todoList.filter((todo) => todo.isCompleted === true).length}
        )
      </button>
    </div>
  );
};
