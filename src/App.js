import logo from './logo.svg';
import './App.css';
import userList from './userList';
import React from 'react';

function App() {
  render() {
    return (
      <div className="user-list">
        {userList.map(user => (
          <div key={user.id} className="user">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;