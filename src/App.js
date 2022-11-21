import React from "react";

const App = () => {
  return (
    <div className="wrapper clear">
      <div className="overly">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30 ">
            Sebet <img width={35} height={35} className="removeBtn cu-p" src="/img/remove.png" alt="Remove"/>
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url("/img/forma-bayern1.jpg")' }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">
                  Bayern Munhenin ev oyunlarinda geyindiyi esas forma
                </p>
                <b>89.99 AZN</b>
              </div>
              <img
                width={25}
                height={25}
                className="removeBtn"
                src="/img/remove.png"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: 'url("/img/forma-bayern1.jpg")' }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">
                  Bayern Munhenin ev oyunlarinda geyindiyi esas forma
                </p>
                <b>89.99 AZN</b>
              </div>
              <img
                width={25}
                height={25}
                className="removeBtn"
                src="/img/remove.png"
                alt="Remove"
              />
            </div>
          </div>
      <div className="cartTotalBlock">
      <ul className="cartTotalBlock" style={{marginTop: "160px"}}>
            <li className="d-flex">
              <span>Total:</span>
              <div></div>
              <b>89.99</b>
            </li>
            <li className="d-flex">
              <span>ƏDV</span>
              <div></div>
              <b>18%</b>
            </li>
            <button className="greenButton" >Ode ve sifaris et</button>
          </ul>
  
      </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src="img/football.png"
            style={{ borderRadius: "50%" }}
            alt="img"
          />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Snikers</h3>
            <p className="opacity-5">En yaxsi Klub Formalari</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img
              width={12}
              height={12}
              src="/img/shopping-cart.png"
              alt="Cart"
            />
            <span>21 AZN</span>
          </li>
          <li>
            <img width={12} height={12} src="/img/user.png" alt="User" />
          </li>
        </ul>
      </header>
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
          <div className="card">
            <div className="favorite">
              <img width={14} height={14} src="/img/unlike.png" alt="" />
            </div>
            <img
              width={113}
              height={112}
              src="/img/forma-bayern1.jpg"
              alt="img"
            />
            <h5>Bayern Munhenin ev oyunlarinda geyindiyi esas forma</h5>
            <div className="d-flex justify-between align-center ">
              <div className="d-flex flex-column">
                <span>Qiymet</span>
                <b>89.99 AZN</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus1.png" alt="img" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={113}
              height={112}
              src="/img/forma-bayern2.jpg"
              alt="img"
            />
            <h5>Bayern Munhenin ev oyunlarinda geyindiyi esas forma</h5>
            <div className="d-flex justify-between align-center ">
              <div className="d-flex flex-column">
                <span>Qiymet</span>
                <b>89.99 AZN</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus1.png" alt="img" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={113}
              height={112}
              src="/img/forma-milan1.jpg"
              alt="img"
            />
            <h5>Bayern Munhenin ev oyunlarinda geyindiyi esas forma</h5>
            <div className="d-flex justify-between align-center ">
              <div className="d-flex flex-column">
                <span>Qiymet</span>
                <b>89.99 AZN</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus1.png" alt="img" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={113}
              height={112}
              src="/img/forma-milan2.jpg"
              alt="img"
            />
            <h5>Bayern Munhenin ev oyunlarinda geyindiyi esas forma</h5>
            <div className="d-flex justify-between align-center ">
              <div className="d-flex flex-column">
                <span>Qiymet</span>
                <b>89.99 AZN</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus1.png" alt="img" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
