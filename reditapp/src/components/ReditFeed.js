import { useState, useEffect } from "react";
import axios from "axios";

function ReditFeed(props) {
  const [feedData, setFeedDate] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const category = props.category || "popular";

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://www.reddit.com/r/${category}.json`)
      .then((response) => {
        setFeedDate(response.data.data.children);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <>
      {isloading ? (
        <div className="spinner-border"></div>
      ) : (
        <ul>
          {feedData.map((item) => {
            return (
              <li key={item.data.id}>
                <a
                  target="_blank"
                  href={`https://www.reddit.com${item.data.permalink}`}
                >
                  {item.data.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ReditFeed;
