import React from 'react';
import { ButtonProps } from 'reactstrap';

const CustomButton = (props: ButtonProps): JSX.Element => {
  const { value } = props;
  return (
    <>
      <button className="star-btn btn-sm" value="Star">
        {value}
      </button>
    </>
  );
};

export default CustomButton;
