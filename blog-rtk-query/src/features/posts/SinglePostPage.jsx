import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostsAuthor from "./PostsAuthor";
import PostsDate from "./PostsDate";
import { selectPostById } from "./postsSlice";
import ReactionButton from "./ReactionButton";

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <article>
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostsAuthor userId={post.userId} />
        <PostsDate timeStamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  );
};

export default SinglePostPage;
