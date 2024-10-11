/* eslint-disable react/prop-types */
import { formatDistanceToNow, parseISO } from "date-fns";

const PostsDate = ({ timeStamp }) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return <p title={timeStamp}>{timeAgo}</p>;
};

export default PostsDate;
