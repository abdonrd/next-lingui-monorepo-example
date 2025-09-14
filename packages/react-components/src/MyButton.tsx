import React from 'react';

interface MyButtonProps {
  type?: 'primary';
}

export const MyButton: React.FC<MyButtonProps> = ({ type }) => {
  return (
    <button style={{ border: '1px solid', padding: '5px 10px' }}>
      my button: type {type}
    </button>
  );
};
