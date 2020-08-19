import React from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';
import {
    ButtonGroup,
    Button,
    DropdownButton,
    Dropdown,
    Form,
    Row,
    Col
} from 'react-bootstrap'


function Filters() {
    return (
        <Row>
            <Col md={4}>
                <Form className="has-search margin">
                    <FaSearch className="form-control-feedback search-icon" />
                    <Form.Control type="search" placeholder="Search" className="search-input" />
                </Form>
            </Col>
            <Col md={8} className="button-group">
                <ButtonGroup className="margin full-width">
                    <Button className="third-width">A-Z Sort</Button>

                    <DropdownButton as={ButtonGroup} title="Title" id="bg-nested-dropdown" className="third-width">
                        <Dropdown.Item eventKey="1">Manager</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Designer</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Developer</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton as={ButtonGroup} title="Location" id="bg-nested-dropdown" className="border-radius third-width">
                        <Dropdown.Item eventKey="1">New York</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Las Vegas</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Chicago</Dropdown.Item>
                    </DropdownButton>
                    <Button className="third-width">Reset</Button>
                </ButtonGroup>
            </Col>

        </Row>

    )
}


export default Filters;