import { API_URL } from "../constants";

async function fetchAllPosts() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("An error as occured. Awkward.");
  }
  const json = response.json();
  return json;
}
async function fetchPost(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("An error as occured. Awkward.");
  }
  const json = response.json();
  return json;
}
async function deletePost(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("An error as occured. Awkward.");
  }
  if (response.status === 204) {
    return null;
  }
  const json = response.json();
  return json;
}

export { deletePost, fetchAllPosts, fetchPost };
