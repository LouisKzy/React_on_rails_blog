import { Link } from "react-router-dom";
// Link posts list (root path) | Link to create new post (posts/new path)

function NavBar() {
  return (
    <nav>
      <Link to="/">Posts Lists</Link>
      {" | "}
      <Link to="/new">New Post</Link>
    </nav>
  );
}
export default NavBar;
