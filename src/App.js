import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from "./Login"
import Title from './Title'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const [user, setUser] = useState('jahangir alam')
  const history = useHistory();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/title">
                  <div className='app__title'>
                  <Title />
                  </div>
                </Route>
                <Route path="/">
                  <div className="app__main">
                    <h1>I love you, Slack !!!</h1>
                    <img src="/heart.svg" alt="heart" />
                  </div>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
