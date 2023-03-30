// import React, { useContext } from "react";
// import { useGlobalContext } from "./context";
import Search from "./Search";
import Movies from "./Movies";

const Home = () => {
  // const name = useGlobalContext();
  return (
    <>
      <Search />
      <Movies />
    </>
  );
};

export default Home;
