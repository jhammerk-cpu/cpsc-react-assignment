import './App.css';
import UserList from './userList.jsx';
import PostList from './postList.jsx';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";
import NotFound from './NotFound.jsx';
import './style.css';
import SearchBox from './search.jsx';
import UserListWithoutSearch from './userListWithoutSearch.jsx';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink className="nav-link" to="/" end>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/posts">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/search">
              Search Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserListWithoutSearch className="user-list-container" />} />
          <Route path="posts" element={<PostList />} />
          <Route path="search" element={<UserList className="user-list-container" />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
