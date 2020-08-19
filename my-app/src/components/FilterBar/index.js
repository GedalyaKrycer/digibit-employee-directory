import React from 'react';
import './style.css';
import FilterSearch from '../FilterSearch/';
import FilterBtnGroup from '../FilterBtnGroup/';
import {
    Row,
    Col
} from 'react-bootstrap'


function FilterBar() {
    return (
        <Row>
            <Col md={4}>
                <FilterSearch />
            </Col>
            <Col md={8} className="button-group">
                <FilterBtnGroup />
            </Col>
        </Row>

    )
}


export default FilterBar;