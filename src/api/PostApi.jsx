import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method to get all posts
export const getPost = () => {
  return api.get("/posts");
};

// delete post method to delete a single post
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// post method to add new post
export const addPost = (post) => {
  return api.post("/posts", post);
};

// update post method to update excisting post
export const updateApiPost = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
