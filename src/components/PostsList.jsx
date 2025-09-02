import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Maximilian" body="React is great!" />
      <Post author="Manual" body="I love coding!" />
      <Post author="Maximilian" body="JavaScript is awesome!" />
      <Post author="Manual" body="Let's build something cool!" />
    </ul>
  );
}

export default PostsList;