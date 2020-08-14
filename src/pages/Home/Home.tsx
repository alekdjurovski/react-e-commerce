import React from "react";
import './Home.scss'
import MenuItem from "../../components/MenuItem/MenuItem";
import Directory from "../../components/Directory/Directory";

const Home = () => {
  return (
    <div className="homepage">
      <Directory></Directory>
    </div>
  );
};

export default Home;
