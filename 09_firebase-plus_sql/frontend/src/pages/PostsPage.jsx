import { useState, useEffect } from "react";
import { useApi } from "./../contexts/ApiContext";
import Post from "./../components/Post";
import { useScroll } from "../contexts/ScrollContext";

const PostsPage = () => {
  const { api } = useApi();
  const { isScrollReachEnd } = useScroll();
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [postsList, setPostslist] = useState([]);
  const [page, setPage] = useState(1);

  const getPosts = async (toPage = 1) => {
    setIsPostsLoading(true);
    const { data } = await api.get(`/posts/?page=${toPage}`);
    setPage(data.page);
    setPostslist([...postsList, ...data.results]);
    setIsPostsLoading(false);
  };

  useEffect(() => {
    if (isScrollReachEnd && !isPostsLoading) getPosts(page + 1);
  }, [isScrollReachEnd]);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="p-24">
        {isPostsLoading ? (
          "loading..."
        ) : (
          <ul>
            {postsList.map((post, i) => (
              <li key={i}>
                <Post
                  content={post.content}
                  date={post.date}
                  postid={post.id}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default PostsPage;
