import React from 'react';
import './style.css';
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap'


function Filters() {
    return (
        <ButtonGroup>
            <Button>A-Z Sort</Button>

            <DropdownButton as={ButtonGroup} title="Title" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1">Manager</Dropdown.Item>
                <Dropdown.Item eventKey="2">Designer</Dropdown.Item>
                <Dropdown.Item eventKey="3">Developer</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="Location" id="bg-nested-dropdown" className="border-radius">
                <Dropdown.Item eventKey="1">New York</Dropdown.Item>
                <Dropdown.Item eventKey="2">Las Vegas</Dropdown.Item>
                <Dropdown.Item eventKey="3">Chicago</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>
    )
}


export default Filters;