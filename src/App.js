import React from 'react';
import FetchedPosts from './components/FetchedPosts';
import NavBar from './components/NavBar';
import PostForm from './components/PostForm';
import Posts from './components/Posts';


function App() {
  return (
    <div className="container p-3">
      <NavBar/>
      <div className="row mt-5">
        <div className="col">
          <PostForm/>
</div>
      </div>
      <div className="row p-3">
        <div className="col">
          <Posts />
        </div>
        <div className="col">
         <FetchedPosts/>
         </div>
      </div>
    </div>
  );
}

export default App;
