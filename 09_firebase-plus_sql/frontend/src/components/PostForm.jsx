import { useEffect } from "react";
import { useState } from "react";

function PostForm(props) {
  console.log(props);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await props.submitHandler({ title, content });
  };

  useEffect(() => {
    if (props.titre != "") setTitle(props.titre);
    if (props.contenu != "") setContent(props.contenu);
  }, [props]);

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 mx-auto">
      <form className="space-y-4" onSubmit={handleFormSubmit}>
        <div>
          <label className="sr-only" htmlFor="name">
            Titre
          </label>
          <input
            className="w-full rounded-lg p-3 text-sm border-solid border-black border-2"
            placeholder="Titre"
            type="text"
            id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Mon post
          </label>

          <textarea
            className="w-full rounded-lg p-3 text-sm border-solid border-black border-2"
            placeholder="Mon post"
            rows="8"
            id="message"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
