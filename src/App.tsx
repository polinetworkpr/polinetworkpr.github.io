import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [url, setUrl] = useState("0");

  useEffect(
    () => {
      setUrl(new URL(document.baseURI).pathname.substring(1))
    },
    [url],
  );

  return (
    <div id="app">
      {url}
    </div>
  )
}

export default App;
