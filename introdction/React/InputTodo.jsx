import React from 'react';

export const InputTodo = (props) => {
  const {todoText, onChange, onClick, disabled } = props;
  return(
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="TODO入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
