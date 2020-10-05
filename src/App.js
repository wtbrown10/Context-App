import React from 'react';
import BookList from './Components/BookList';
import NavBar from './Components/NavBar';
import ThemeToggle from './Components/ThemeToggle';
import ThemeContextProvider from './Context/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <NavBar />
      <BookList />
      <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
