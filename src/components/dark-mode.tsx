import React, { useState } from 'react';

function toggleDarkMode() {
  const body = document.querySelector("body");
  const currentClass = body.classList.contains("dark-mode") ? "dark-mode" : "";
  body.classList.remove(currentClass);
  body.classList.add(currentClass ? "" : "dark-mode");
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
  }
  
  return (
    <div className="App">
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default App;



