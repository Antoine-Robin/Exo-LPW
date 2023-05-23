import { useState, useEffect } from "react";
import { useApi } from "./../contexts/ApiContext";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

function UpdatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { api } = useApi();
  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`posts/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((err) => console.log(err));
  });

  const handleFormSubmit = async ({ title, content }) => {
    await api
      .put(`posts/${id}`, {
        title: title,
        content: content,
      })
      .then((response) => {
        console.log(response);
        nav("/post/" + id);
      })
      .catch((err) => console.error(err));
  };

  return (
    <PostForm
      submitHandler={handleFormSubmit}
      titre={title}
      contenu={content}
    />
  );
}

export default UpdatePost;
