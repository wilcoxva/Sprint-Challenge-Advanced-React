import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

    return (
      <div className="App">
        <header className="App-header">
          <div className="dark-mode__toggle">
            <div
              onClick={toggleMode}
              className={darkMode ? 'toggle toggled' : 'toggle'}
            />
          </div>
          <UserCard />
        </header>
      </div>
    );
  
}

export default App;
