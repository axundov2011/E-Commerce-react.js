import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://6359a65738725a1746b58fe0.mockapi.io/cart"
      );
      const favoritesResponse = await axios.get(
        "https://6359a65738725a1746b58fe0.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://6359a65738725a1746b58fe0.mockapi.io/items"
      );

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (data) => {
    if (cartItems.find((item) => Number(item.id) === Number(data.id))) {
      axios.delete(
        `https://6359a65738725a1746b58fe0.mockapi.io/cart${data.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(data.id))
      );
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6359a65738725a1746b58fe0.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id === id));
    // console.log(id);
  };

  const onAddToFavorite = async (data) => {
    try {
      if (favorites.find((favData) => favData.id === data.id)) {
        axios.delete(
          `https://60d62397943aa60017768e77.mockapi.io/favorites/${data.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== data.id));
      } else {
        const { datas } = await axios.post(
          "https://60d62397943aa60017768e77.mockapi.io/favorites",
          data
        );
        setFavorites((prev) => [...prev, datas]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
      console.error(error);
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Link to="/">
        <Header onClickCart={() => setCartOpened(true)} />
      </Link>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
