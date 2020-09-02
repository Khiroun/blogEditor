import React from "react";
import app from "../base";
const Home = () => {
  return (
    <div>
      <nav>
        <button
          onClick={() => {
            app.auth().signOut();
          }}
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Home;
