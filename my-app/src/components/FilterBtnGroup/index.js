import React from 'react';
import './style.css';
import {
    ButtonGroup,
    Button,
    DropdownButton,
    Dropdown
} from 'react-bootstrap'


function FilterBtnGroup() {
    return (
        <ButtonGroup className="margin full-width">
            <Button>A-Z Sort</Button>

            <DropdownButton as={ButtonGroup} title="Title" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1">Manager</Dropdown.Item>
                <Dropdown.Item eventKey="2">Designer</Dropdown.Item>
                <Dropdown.Item eventKey="3">Developer</Dropdown.Item>
            </DropdownButton>

            <DropdownButton as={ButtonGroup} title="Location" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1">New York</Dropdown.Item>
                <Dropdown.Item eventKey="2">Las Vegas</Dropdown.Item>
                <Dropdown.Item eventKey="3">Chicago</Dropdown.Item>
            </DropdownButton>
            <Button>Reset</Button>
        </ButtonGroup>


    )
}


export default FilterBtnGroup;