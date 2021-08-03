import React from 'react';
import styled from 'styled-components';

function SearchInput({ onInput, ...props }) {
  return (
    <>
      <Input onInput={onInput} {...props} />
    </>
  );
}

export default SearchInput;

const Input = styled.input`
  background-color: #fff;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 1rem;

  :focus {
    outline-color: #8b5cf6;
  }

  @media (max-width: 768px) {
    max-width: 40%;
  }
`;
