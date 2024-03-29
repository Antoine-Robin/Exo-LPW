import { useContext } from "react";
import { Link } from "react-router-dom";

const Article = (props) => {
  const formatDate = (sqlDate) => {
    const date = new Date(sqlDate);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    const day = formattedDate.slice(0, 2);
    const month = formattedDate.slice(3, 6);
    const year = formattedDate.slice(7);

    const suffix =
      day === "01" || day === "21" || day === "31"
        ? "st"
        : day === "02" || day === "22"
        ? "nd"
        : day === "03" || day === "23"
        ? "rd"
        : "th";

    return `${day}${suffix} ${month} ${year}`;
  };

  return (
    <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm mb-6">
      <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {formatDate(props.date)}
        </time>
        <Link to={"/post/" + props.postid}>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {props.content}
          </h3>
        </Link>
        <Link to={"/post/update/" + props.postid}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Article;
