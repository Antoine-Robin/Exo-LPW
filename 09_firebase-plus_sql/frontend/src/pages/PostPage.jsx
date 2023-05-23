import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "./../contexts/ApiContext";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [listComment, setListComment] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newComment, setNewComment] = useState("");
  const { api } = useApi();

  const getPost = async () => {
    const { data } = await api.get("posts/" + id);
    setPost(data);
  };

  const getComments = async () => {
    const { data } = await api.get("comments/post/" + id);
    setListComment(data);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await api
      .post("comments", {
        postId: id,
        content: newComment,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    setShowForm(false);
    setNewComment("");
    getComments();
  };

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  return (
    <>
      <p className="text-xl font-bold">Titre: {post.title}</p>
      <span className="block mt-2">{post.content}</span>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4"
        id="add-comment"
        onClick={() => setShowForm(!showForm)}
      >
        Ajouter un commentaire
      </button>
      {showForm && (
        <form className="mt-4" onSubmit={handleFormSubmit}>
          <label className="block">
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={newComment}
              placeholder="Nouveau commentaire"
              onChange={(e) => setNewComment(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Ajouter
          </button>
        </form>
      )}
      <p className="text-lg font-bold mt-8">Commentaires liés au post:</p>
      {listComment.map((list, i) => (
        <p className="mt-2" key={i}>
          <span className="font-semibold">{i + 1}</span> {list.content}
        </p>
      ))}
    </>
  );
}

export default PostPage;
