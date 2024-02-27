import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";
function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const post = { title, body };
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (response.ok) {
      const newPost = await response.json();
      setTitle("");
      setBody("");
      navigate(`/posts/${newPost.id}`);
    } else {
      console.log("Error: " + response.statusText);
    }
  }
  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titleInput">Title</label>
        <input
          type="text"
          id="titleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="body">Content</label>
        <textarea
          id="bodyInput"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
export default NewPostForm;
