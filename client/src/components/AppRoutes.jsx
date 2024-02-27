import { Route, Routes } from "react-router-dom";
import EditPostForm from "../features/posts/EditPostForm";
import NewPostForm from "../features/posts/NewPostForm";
import PostDetails from "../features/posts/PostDetails";
import PostsList from "../features/posts/PostsList";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="posts/:id" element={<PostDetails />} />
      <Route path="posts/:id/edit" element={<EditPostForm />} />
      <Route path="/new" element={<NewPostForm />} />
    </Routes>
  );
}

export default AppRoutes;
