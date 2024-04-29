import AddNewPost from "./Components/AddNewPost";
import "./App.css";
import SinglePagePost from './Components/SinglePagePost';
import { Routes, Route } from 'react-router-dom';
import PostList from './Components/PostList.js';
import Layout from './Components/Layout';
import SideBar from  './Components/SideBar';

export default function App() {

  return <div className="appComponent">
  <SideBar />

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path='post'>
          <Route index element={<AddNewPost />} />
          <Route path=':postId' element={<SinglePagePost />} />
        </Route>
      </Route>
    </Routes>

  </div>
}