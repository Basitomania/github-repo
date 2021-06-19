import React from 'react';
import { DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { CustomDropDownProps } from '../../types';

const CustomDropDown = (props: CustomDropDownProps): JSX.Element => {
  const { value } = props;
  return (
    <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
      <DropdownToggle className="font-weight-bold" nav caret>
        {value}: Any
      </DropdownToggle>
    </UncontrolledDropdown>
  );
};

export default CustomDropDown;
