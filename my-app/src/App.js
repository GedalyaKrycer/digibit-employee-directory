import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import FilterBar from "./components/FilterBar";
import CardWrapper from "./components/CardWrapper";
import TeamCard from "./components/TeamCard";
import teamArray from "./team.json";



function App() {
  // Handles which cards get wrapped to
  const [team, setTeam] = useState(teamArray);

  // Handles the search state
  const [search, setSearch] = useState('');

  // Handles the warning validations for search
  const [warning, setWarning] = useState(false);

  // Handles the name sorting state
  const [nameSort, setNameSort] = useState("AZ");


  // Sets the Search State based on the search input
  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  // Runs the first time the app starts or a new search term is provided
  useEffect(() => {

    // When the search field (state) is empty the orginal team array is loaded
    if (!search) {
      return setTeam(teamArray);
    }

    // Validates that the input is not a valid letter. If so it sets the warning boolean to true, resets the team array and clears the search field, before returning 
    if (!/^[a-zA-Z]*$/g.test(search)) {
      setSearch("");
      setTeam(teamArray);
      setWarning(true);
      return;

    }

    // Powers the search to only show the people that match the search value state
    const results = team.filter(person =>
      person.name.includes(search.toLowerCase())
    );
    setTeam(results);
    setWarning(false);


  }, [search])



  const sortNames = () => {
    switch (nameSort) {
      case 'AZ':
        setTeam([...team].sort((a, b) => (a.name > b.name) ? 1 : -1));
        setNameSort("ZA")
        break;
      case 'ZA':
        setTeam([...team].sort((a, b) => (a.name < b.name) ? 1 : -1))
        setNameSort("AZ")
        break;
      default:
        return;
    }
  }


  // Filters based on dropdown selected 
  const handleSelectDropdown = (eventKey) => {

    switch (eventKey) {
      case "Manager":
        setTeam([...teamArray].filter(person =>
          person.title.includes("Manager")
        ));
        break;
      case "Designer":
        setTeam([...teamArray].filter(person =>
          person.title.includes("Designer")
        ));
        break;
      case "Developer":
        setTeam([...teamArray].filter(person =>
          person.title.includes("Developer")
        ));
        break;
      case "New York":
        setTeam([...teamArray].filter(person =>
          person.location.includes("New York")
        ));
        break;
      case "Las Vegas":
        setTeam([...teamArray].filter(person =>
          person.location.includes("Las Vegas")
        ));
        break;
      case "Chicago":
        setTeam([...teamArray].filter(person =>
          person.location.includes("Chicago")
        ));
        break;
      default:
        resetTeam();
        return;

    }
  }


  // Resets to all the team cards
  const resetTeam = () => {
    setTeam(teamArray);
    setSearch("");
  }



  return (
    <>
      <Header />
      <Main>
        <FilterBar
          inputValue={search}
          handleInputChange={handleInputChange}
          resetBtn={resetTeam}
          sortBtn={sortNames}
          children={nameSort === "AZ" ? "Sort A–Z" : "Sort Z–A"}
          handleSelectDropdown={handleSelectDropdown} />

        {/* Validation */}
        {warning === false ? null : <h4>Woops, please use letters only. Numbers or special characters won't display results.</h4>}
        {team.length === 0 ? <h4>Looks like we don't have this team member. Please try a different name or hit "Reset".</h4> : null}
        
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