/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost, fetchAllPosts } from "../../services/postService";
function PostsList() {
  // gestion de l'etat
  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  // Deroulement des actions

  // Fetch posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await fetchAllPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError("An error as occured. Awkward.");
        setLoading(false);
        console.log("Error: " + error);
      }
    }
    fetchPosts();
  }, []);
  const deletePostHandler = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.log("failed to delete post: " + error);
    }
  };
  // render
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>
            <Link to={`/posts/${post.id}`} className="post-title">
              {post.title}
            </Link>
          </h2>
          <div className="post-links">
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
            {" | "}
            <button onClick={() => deletePostHandler(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default PostsList;
