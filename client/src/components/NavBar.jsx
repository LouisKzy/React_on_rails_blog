// Link posts list (root path) | Link to create new post (posts/new path)
import { Link } from "react-router-dom";
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
