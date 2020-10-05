import React from 'react';
import BookList from './Components/BookList';
import NavBar from './Components/NavBar';
import ThemeContextProvider from './Context/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <NavBar />
      <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
