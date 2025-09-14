import React from 'react';
import { Trans } from '@lingui/react/macro';

interface MyButtonProps {
  type?: 'primary';
}

export const MyButton: React.FC<MyButtonProps> = ({ type }) => {
  return (
    <button style={{ border: '1px solid', padding: '5px 10px' }}>
      <Trans>my button: type {type}</Trans>
    </button>
  );
};
