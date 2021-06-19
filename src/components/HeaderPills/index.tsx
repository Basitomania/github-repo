import React from 'react';
import { Badge, Col, Container, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import './styles.css';

// eslint-disable-next-line max-lines-per-function
const HeaderPills = () => {
  return (
    <Container className="header-pills-container">
      <Row className="header-pills-row">
        <Col xs="12" sm="6" lg="6">
          <Badge color="primary">Repositories</Badge>
          <Badge color="secondary">Developers</Badge>
        </Col>
        <Col xs="12" sm="6" lg="6" className="filter-container">
          <Row>
            <Col xs="12" sm="4" lg="4">
              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>
                  Spoken Language: Any
                </DropdownToggle>
              </UncontrolledDropdown>
            </Col>
            <Col xs="12" sm="4" lg="4">
              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>
                  Spoken Language: Any
                </DropdownToggle>
              </UncontrolledDropdown>
            </Col>
            <Col xs="12" sm="4" lg="4">
              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>
                  Date Range: Any
                </DropdownToggle>
              </UncontrolledDropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderPills;
