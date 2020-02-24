import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import { useDarkMode } from './hooks/useDarkMode';
import styled from 'styled-components';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

    return (
      <div className="App">
        <header data-testid="header" className="App-header">
          <div className="dark-mode__toggle">
            <div
              onClick={toggleMode}
              className={darkMode ? 'toggle toggled' : 'toggle'}
            />
          </div>
          <H1>Hello!</H1>
          <H2>Search the list of players:</H2>
          <input placeholder="Search me!" type="number" />
          <UserCard />
        </header>
      </div>
    );
  
}

export default App;

const H1 = styled.h1`
  color: gray;
`

const H2 = styled.h2`
  color: gray;
`
