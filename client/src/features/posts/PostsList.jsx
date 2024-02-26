/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
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
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          throw response;
        }
      } catch (error) {
        setError("An error as occured. Awkward.");
        console.log("Error: " + error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);
  // render
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
export default PostsList;
