import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="text-center">
      <h2>click on task</h2>
      <div className="grid grid-row-2 grid-cols-2 gap-4">
        <Link to="/one">
          <div>task one</div>
        </Link>
        <Link to="/two">
          <div>task two</div>
        </Link>
        <Link to="/three">
          <div>task three</div>
        </Link>
        <Link to="/four">
          <div>task four</div>
        </Link>
        <Link to="/logic">
          <div>task logic</div>
        </Link>
      </div>
    </div>
  );
};
export default Home;
