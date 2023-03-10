import React from "react";
import { Link, useParams } from "react-router-dom";
import ReditFeed from "../components/ReditFeed";

function FeedPage() {
  const { category } = useParams();
  return (
    <div className="container">
      <Link to="/feed/">Default</Link> <br />
      <Link to="/feed/starcraft">Starcraft</Link>
      <br />
      <Link to="/feed/facepalm">Facepalm</Link>
      <h1>FeedPage</h1>
      <ReditFeed category={category} />
    </div>
  );
}

export default FeedPage;
