import './App.css';
import Navigation from './components/Navigation';
import Todo from './components/Todo/Todo';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Posts from './components/posts/Posts';
import Cards from './components/Card/Cards';
import PostItem from './components/posts/PostItem';
import Login from './components/Login';
import About from './components/About'
import CardDetail from './components/Card/CardDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {window.location.pathname !== '/' ? <Navigation /> : null}
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/home' element={<Todo />}></Route>
          <Route exact path='/posts' element={<Posts />}></Route>
          <Route exact path='/posts/:post_id' element={<PostItem />}></Route>
          <Route exact path='/cards' element={<Cards />}></Route>
          <Route exact path='/cards/cardDetails' element={<CardDetail />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
