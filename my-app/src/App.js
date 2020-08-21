import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import FilterBar from "./components/FilterBar";
import CardWrapper from "./components/CardWrapper";
import TeamCard from "./components/TeamCard";
import teamArray from "./team.json";


function App() {
  const [team, setTeam] = useState(teamArray);

  const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (!search) {
      return;
    }

    const results = team.filter(person =>
      person.name.toLowerCase().includes(search)
    );
    setTeam(results);


  }, [search])



  // const dynamicSearch = () => {
  //   return 
  // }


  return (
    <>
      <Header />
      <Main>
        <FilterBar
          inputValue={search}
          handleInputChange={handleInputChange}
        />
        <CardWrapper>
          {team.map(person => (
            <TeamCard
              key={person.id}
              img={person.img}
              name={person.name}
              title={person.title}
              location={person.location}
              phone={person.phone}
              email={person.email}
            />
          ))}
        </CardWrapper>
      </Main>
    </>
  );
}

export default App;




const sort = arr => arr.sort((a, b) => a - b);
//By default,the sort() function sorts values as strings.Fix this by providing a compare function.
// Example
sort([1, 5, 2, 4, 3]);      // [1, 2, 3, 4, 5]