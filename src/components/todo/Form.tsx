import styled from "styled-components";
import { useState, useRef } from "react";

export default function Form({ pushTodo }: { pushTodo: (T: string) => void }) {
  const [input, setInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log(value);
    pushTodo(input); // todo 배열에 input 값 추가
    setInput("");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <TodoForm onSubmit={handleSubmit}>
      <TodoInput
        value={input}
        onChange={handleInputChange}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <AddButton>추가</AddButton>
    </TodoForm>
  );
}

const TodoForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`;

const AddButton = styled.button`
  border: 0.8rem solid #00462a;
  font-weight: 600;
  border-left: none;
  width: 8rem;
`;

const TodoInput = styled.input`
  width: 100%;
  height: 5rem;
  border: 0.8rem solid #00462a;
  padding-left: 1rem;
`;
