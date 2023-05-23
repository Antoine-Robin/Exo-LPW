import { useApi } from "../contexts/ApiContext";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

function CreatePost() {
  const { api } = useApi();
  const nav = useNavigate();

  const handleFormSubmit = async ({ title, content }) => {
    await api
      .post("posts", {
        title,
        content,
      })
      .then((response) => {
        console.log(response);
        const newId = response.data.id;
        nav("/post/" + newId);
      })
      .catch((err) => console.log(err));
  };

  return <PostForm submitHandler={handleFormSubmit} />;
}

export default CreatePost;
