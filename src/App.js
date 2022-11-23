import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  { name: "  Bayern Munhenin ev oyunlarinda geyindiyi esas forma",
   price: 69,
   imgUrl: '/img/forma-bayern1.jpg'  
  
  },
  {
    name: "  Bayern Munhenin ev oyunlarinda geyindiyi ikinci forma",
    price: 59,
    imgUrl: "/img/forma-bayern2.jpg",
  },
  {
    name: "Milanin ev oyunlarinda geyindiyi esas forma",
    price: 59,
    imgUrl: "/public/img/forma-milan1.jpg",
  },
  {

    name: "Milanin ev oyunlarinda geyindiyi esas forma",
    price: 59,
    imgUrl: "/public/img/forma-milan2.jpg",
  
  },
];
const App = () => {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Butun Klub Formaları</h1>
          <div className="search-block d-flex ">
            <img
              width={15}
              height={15}
              className="mt-1"
              src="img/search.png"
              alt="Search"
            />
            <input placeholder="loading..." />
          </div>
        </div>

        <div className="d-flex">
   
          {arr.map((obj) =>(
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
