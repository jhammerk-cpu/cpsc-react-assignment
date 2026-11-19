import './App.css';
import UserList from './userList.jsx';
import PostList from './postList.jsx';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";
import NotFound from './NotFound.jsx';

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
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path="posts" element={<PostList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
