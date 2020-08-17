import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Filters from "./components/Filters";


function App() {
  return (
    <>
      <Header />
      <Main>
        <Filters />
        <h2>Jocelyn Curtis</h2>
        <h3>Designer</h3>
        <h4>Location</h4>
        <p>jcurtis@digidigits.com</p>
      </Main>




    </>
  );
}

export default App;
