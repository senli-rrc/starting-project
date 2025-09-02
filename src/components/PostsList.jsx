import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList() {
  const [enteredBody, setEnteredBody] = useState(' ');
  const [enteredAuthor, setEnteredAuthor] = useState(' ');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <form className={classes.form}>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manual" body="I love coding!" />
        <Post author="Maximilian" body="JavaScript is awesome!" />
        <Post author="Manual" body="Let's build something cool!" />
      </ul>
    </form>
  );
}

export default PostsList;