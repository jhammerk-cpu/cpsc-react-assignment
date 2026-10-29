import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, loading: false });
      });
  }}
redner() ;{
    const { users, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      </div>
    );
  }