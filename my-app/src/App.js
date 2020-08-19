import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Filters from "./components/Filters";
import CardWrapper from "./components/CardWrapper";
import TeamCard from "./components/TeamCard";


function App() {
  return (
    <>
      <Header />
      <Main>
        <Filters />
        <CardWrapper>
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </CardWrapper>


      </Main>




    </>
  );
}

export default App;
