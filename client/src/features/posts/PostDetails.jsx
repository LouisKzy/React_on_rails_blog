import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../constants";
function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          throw response;
        }
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const deletePost = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate("/");
      } else {
        throw response;
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">Back to posts</Link>
      {" | "}
      <Link to={`/posts/${id}/edit`}>Edit post</Link>
      {" | "}
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}
export default PostDetails;
