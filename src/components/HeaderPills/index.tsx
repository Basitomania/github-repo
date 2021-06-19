import React from 'react';
import { Badge, Col, Row } from 'reactstrap';
import './styles.css';
import CustomDropDown from '../CustomDropdown';
import { HeaderPillsProps } from '../../types';

const HeaderPills = (props: HeaderPillsProps): JSX.Element => {
  const { handleTabClick, toggleState } = props;
  return (
    <div className="header-pills-container">
      <Row className="header-pills-row">
        <Col xs="12" sm={toggleState === 1 ? '6' : '8'} lg={toggleState === 1 ? '6' : '8'}>
          <Badge color={toggleState === 1 ? 'primary' : 'secondary'} onClick={() => handleTabClick(1)}>
            Repositories
          </Badge>
          <Badge color={toggleState === 2 ? 'primary' : 'secondary'} onClick={() => handleTabClick(2)}>
            Developers
          </Badge>
        </Col>
        <Col xs="12" sm={toggleState === 1 ? '6' : '4'} lg={toggleState === 1 ? '6' : '4'} className="filter-container">
          <Row>
            {toggleState === 1 && (
              <Col xs="12" sm="4" lg="4">
                <CustomDropDown value={'Spoken Language'} />
              </Col>
            )}
            <Col xs="12" sm={toggleState === 1 ? '4' : '6'} lg={toggleState === 1 ? '4' : '6'}>
              <CustomDropDown value={'Language'} />
            </Col>
            <Col xs="12" sm={toggleState === 1 ? '4' : '6'} lg={toggleState === 1 ? '4' : '6'}>
              <CustomDropDown value={'Date Range'} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderPills;
