import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deletePost as deletePostService,
  fetchPost,
} from "../../services/postService";

function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const json = await fetchPost(id);
        setPost(json);
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const deletePost = async () => {
    try {
      await deletePostService(post.id);
      navigate("/");
    } catch (error) {
      console.log("Failed to delete post: " + error);
    }
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      {" | "}
      <Link to="/">Back to posts</Link>
      {" | "}
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}

export default PostDetails;
