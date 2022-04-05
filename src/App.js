import React from 'react';
import './App.css';
import ChildA from './ChildA';

const name = React.createContext();
export {name};



function App() {
  return (
   <name.Provider value={{fname:"Adnan",lname:"Khan"}}>
      <ChildA/>
   </name.Provider>
  );
}

export default App;
