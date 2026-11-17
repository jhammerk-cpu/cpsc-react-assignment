import './App.css';
import UserList from './userList';
import PostList from './postList';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts">
              Posts
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path="posts" element={<PostList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
