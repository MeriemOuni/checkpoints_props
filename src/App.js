import React from 'react';
import './App.css';
import Profile from './profile/Profile';


function App() {
  return (
    <div className="App">

      <>

          <Profile fullName="Meriem Ouni" bio="Art Plastique" profession="Artiste Peintre">
            <img src="/profile.jpg" alt="profilePhoto" style={{width:"300px", height:"300px"}}></img>

            </Profile>
      </>

    </div>
  );
}

export default App;
