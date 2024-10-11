/* eslint-disable react/prop-types */
import { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostsAuthor from "./PostsAuthor";
import PostsDate from "./PostsDate";
import { selectPostById } from "./postsSlice";
import ReactionButton from "./ReactionButton";

let PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`/post/${post.id}`}>View Post</Link>
        <PostsAuthor userId={post.userId} />
        <PostsDate timeStamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  );
};

PostsExcerpt = memo(PostsExcerpt);
export default PostsExcerpt;
