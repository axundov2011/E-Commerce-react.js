import React from 'react'

const Drawer = () => {
  return (
    <div style={{display: "none"}} className="overly">
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
<ul >
      <li>
        <span>Total:</span>
        <div></div>
        <b>89.99</b>
      </li>
      <li >
        <span>ƏDV</span>
        <div></div>
        <b>18%</b>
      </li>
      <button className="greenButton" >Ode ve sifaris et</button>
    </ul>
    </div>
</div>
  </div>
  )
}

export default Drawer