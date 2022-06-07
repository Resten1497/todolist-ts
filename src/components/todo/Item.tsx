import styled from "styled-components";
import React, { useState, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ITodo } from "../../interface";

export default function Item({
  todoList,
  deleteTodo,
}: {
  todoList: ITodo[];
  deleteTodo: (id: number) => void;
}) {
  const todoLabel = useRef(null);
  const checkbox = useRef<HTMLInputElement>(null);

  // todo 삭제하기
  const handleDeleteClick = (id: number) => {
    deleteTodo(id);
  };

  const handleBoxClick = (id: number) => {
    // 체크하면 todo에 중간 줄 긋기 (toggle)
    //style.textDecoration = checked ? "line-through" : null;
    //style.color = checked ? "gray" : null;
  };

  return (
    <TodoLists>
      {todoList.map((todo: ITodo, index: number) => (
        <TodoList key={todo.id}>
          <Checkbox type="checkbox" onClick={() => handleBoxClick(todo.id)} />
          <StyledLabel>{todo.value}</StyledLabel>
          <IoCloseOutline
            size="2rem"
            onClick={() => handleDeleteClick(todo.id)}
          />
        </TodoList>
      ))}
    </TodoLists>
  );
}

const TodoLists = styled.div`
  margin-left: 0.5rem;
`;
const TodoList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const Checkbox = styled.input`
  transform: scale(1.5);
  margin: 0 1rem;
`;
const StyledLabel = styled.label`
  margin-right: 0.5rem;
`;
