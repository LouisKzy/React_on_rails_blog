import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../../services/postService";
function EditPostForm() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const json = await fetchPost(id);
        setPost(json);
      } catch (error) {
        console.log("Error: " + error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedPost = {
      title: post.title,
      body: post.body,
    };
    try {
      const json = await updatePost(id, updatedPost);
      navigate(`/posts/${json.id}`);
    } catch (error) {
      console.log("Error at updating post: " + error);
    }
  };
  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Post Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post-title">Title</label>
          <br />
          <input
            type="text"
            id="post-title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="post-body">Body</label>
          <br />
          <textarea
            id="post-body"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
export default EditPostForm;
