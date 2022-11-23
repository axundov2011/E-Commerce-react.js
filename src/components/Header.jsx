import React from 'react'

const Header = () => {
  return (
    <div>
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
    </div>
  )
}

export default Header