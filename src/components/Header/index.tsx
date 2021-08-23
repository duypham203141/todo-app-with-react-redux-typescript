import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "../Modal";
import ReFormTodo from "../ReFormTodo";
import "./style.scss";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickAdd = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="header">
      <h2 className="header-title">Todo App</h2>
      <button className="btn btn__primary btn__add" onClick={handleClickAdd}>
        <FontAwesomeIcon className="noti__icon" icon={["fas", "plus"]} />
        <span className="text-add">{` New Todo`} </span>
      </button>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ReFormTodo
          title="New Todo"
          setIsModalOpen={setIsModalOpen}
        ></ReFormTodo>
      </Modal>
    </div>
  );
};

export default Header;
