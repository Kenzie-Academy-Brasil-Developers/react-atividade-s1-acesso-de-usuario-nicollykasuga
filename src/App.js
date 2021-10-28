import './App.css';
import {useState} from 'react';
import './components/RestrictedPage/index'
import { RestrictedPage } from './components/RestrictedPage/index';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState (false)
  const user = "Nicolly"

  function Login () {
    setIsLoggedIn(!isLoggedIn)
  }

  function Logout () {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage isLoggedIn={isLoggedIn} user={user} Login={Login} Logout={Logout}/>
      </header>
    </div>
  );
}

export default App;
