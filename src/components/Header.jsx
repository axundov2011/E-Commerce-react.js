import React from "react";
import { Link } from "react-router-dom";


const Header = (props) => {
 

  return (
    <div>
      <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/football.png" alt="Logotype" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
        <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/shopping-cart.png" alt="Корзина" />
          <span>{props.price} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heartss.png" alt="Закладки" />
          </Link>
        </li>
        {/* <li>
          <Link to="/orders">
            <img width={18} height={18} src="/img/user.png" alt="Пользователь" />
          </Link>
        </li> */}
      </ul>
      </header>
    </div>
  );
};

export default Header;
