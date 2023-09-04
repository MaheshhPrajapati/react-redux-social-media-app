import AddNewPost from "./Components/AddNewPost";
import PostSlice from "./Components/PostList";
import "./App.css";
import SinglePagePost from './Components/SinglePagePost';
import { Routes, Route } from 'react-router-dom';
import PostList from './Components/PostList.js';
import Layout from './Components/Layout';

export default function App() {

  return <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<PostList />} />
      <Route path='post'>
        <Route index element={<AddNewPost />} />
        <Route path=':postId' element={<SinglePagePost />} />
      </Route>
    </Route>
  </Routes>
}