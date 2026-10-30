import { useEffect, useState } from 'react';
import SearchBox from './search';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError('Unable to load users. Please try again later.');
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);
  const favoriteUsers = users.filter((user) => user.isFavorite);

  function toggleFavorite(userId) {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === userId ? { ...user, isFavorite: !user.isFavorite } : user
      )
    );
  }

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <section className="user-list">
      <h2>Users</h2>
      <SearchBox value={searchTerm} onChange={setSearchTerm} />
      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <button
                type="button"
                aria-pressed={Boolean(user.isFavorite)}
                onClick={() => toggleFavorite(user.id)}
              >
                {user.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2>Favorite Users</h2>
      {favoriteUsers.length === 0 ? (
        <p>No favorite users found.</p>
      ) : (
        <ul>
          {favoriteUsers.map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UserList;
