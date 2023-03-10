import React from "react";

import Card from "../components/Card";

function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
  
}) {

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(data) => onAddToFavorite(data)}
        onPlus={(data) => onAddToCart(data)}

        loading={isLoading}
        {...item}
      />
    ));
  };


  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img
            src="/img/search.png"
            width={15}
            height={15}
            style={{ marginTop: "15px" }}
            alt="Search"
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/remove.png"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
     {console.log(cartItems, items)};
      <div className="d-flex flex-wrap">
 { renderItems()  }
      </div>
    </div>
  );
}

export default Home;
