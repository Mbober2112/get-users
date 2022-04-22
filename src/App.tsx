import React from 'react';
import './App.scss';
import Users from './components/users/users';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/profile/profile';

class App extends React.Component {
  render () {
    return(
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
    )
  }
}

export default App;
