import React from 'react';
import './style.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// This button group allows the user to filter names from A-Z, Z-A, filter by Job Title, filter by Location Title, and reset all values.
function FilterBtnGroup({ sortBtn, resetBtn }) {
    return (
        <ButtonGroup className="margin full-width">
            <Button onClick={sortBtn}>A-Z Sort</Button>

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
            <Button onClick={resetBtn}>Reset</Button>
        </ButtonGroup>


    )
}


export default FilterBtnGroup;