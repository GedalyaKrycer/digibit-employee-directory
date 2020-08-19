import React from 'react';
import './style.css';
import { FaSearch } from 'react-icons/fa';
import Form from 'react-bootstrap/Form'


function FilterSearch() {
    return (
        <Form className="has-search margin">
            <FaSearch className="form-control-feedback search-icon" />
            <Form.Control type="search" placeholder="Search" className="search-input" />
        </Form>
    )
}


export default FilterSearch;