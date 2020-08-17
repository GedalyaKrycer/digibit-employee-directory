import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';

function Main(props) {
    return (
        <main className="wrapper bg-color">
            <Container>
                {props.children}
            </Container>
        </main>
    )
}


export default Main;