import React from 'react';
import { ButtonProps } from '../../types';

const CustomButton = (props: ButtonProps): JSX.Element => {
  const { value, icon } = props;
  return (
    <>
      <button className="star-btn btn-sm" value="Star">
        {icon && icon}
        {value}
      </button>
    </>
  );
};

export default CustomButton;
