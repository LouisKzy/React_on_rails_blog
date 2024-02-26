import "./App.css";
import PostsList from "./features/posts/PostsList";
function App() {
  return (
    <>
      <div className="App">
        <h1>React on rails blog </h1>
        <p>Find this application Layout in client/src/App.jsx</p>
        <PostsList />
      </div>
    </>
  );
}

export default App;
