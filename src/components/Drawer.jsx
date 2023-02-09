import React from "react";

const Drawer = ({ onClose, onRemove, items = [] }) => {
  console.log(onClose, items);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Sebet
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/remove.png"
            alt="Close"
            width={25}
            height={25}
          />
        </h2>

        {items.length > 0 ? (
  <div>
            <div className="items">
            {items.map((data) => (
              <div key={data.id} className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: `url(${data.imgUrl})` }}>
                  <div className="cartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{data.title}</p>
                    <b>{data.price} AZN</b>
                  </div>
                  <img
                    onClick={() => onRemove(data.id)}
                    src="/img/remove.png"
                    alt="Remove"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            ))}
          </div>
                  <div className="cartTotalBlock">
                  <ul>
                    <li>
                      <span>Ümumi</span>
                      <div></div>
                      <b>69 AZN</b>
                    </li>
                    <li>
                      <span>ƏDV 5%</span>
                      <div></div>
                      <b>69 AZN</b>
                    </li>
                  </ul>
                  <button className="greenButton">
                    Zakaz Siparis et
                    <img width={11} height={11} src="/img/arrow.png" alt="Arrow" />
                  </button>
                </div>
  </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart-4085814-3385483.webp"
              alt=""
            />
            <h2>Sebet Boşdur</h2>
            <p className="opacity-6">
              Hec olmasa bir eded forma sifaris vermelisen ki siparis olunsun
            </p>
            <button onClick={onClose} className="greenButton">
              <img width={11} height={11} src="/img/right-arrow.png" alt="" />
              Geri dön
            </button>
          </div>
        )}


      </div>
    </div>
  );
};

export default Drawer;
