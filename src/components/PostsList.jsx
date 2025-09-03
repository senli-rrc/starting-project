import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onBodyChange={bodyChangeHandler}
            // onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
      {posts.length > 0 && (
      <ul className={classes.posts}>
        {/* <Post author="Manual" body="I love coding!" />
        <Post author="Maximilian" body="JavaScript is awesome!" />
        <Post author="Manual" body="Let's build something cool!" /> */}
        {posts.map((post) => (
          <Post key={post.body} author={post.author} body={post.body} />
        ))}
      </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>No posts found!</h2>
          <p>Start by creating a new post.</p>
        </div>
      )}
    </>
  );
}

export default PostsList;