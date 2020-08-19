import React from 'react';
import Container from 'react-bootstrap/Container';

function Main(props) {
    return (
        <main className="bg-color">
            <Container>
                {props.children}
            </Container>
        </main>
    )
}


export default Main;