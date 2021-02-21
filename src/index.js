import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { OneRow } from "./table";

// FONTS AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
  faMapMarkerAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

// MEDIA
import horizontal_logo from "./images/pizza-seeklogo.com_horizontal_bar.png";
import top_logo from "./images/big_logo_uptop_Flatten.png";

// CSS
import "./index.css";

// BOOTSTRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Popper from "popper.js";
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.js";

// DATA
import { menu } from "./data.js";

export function TopBar(props) {
  console.log("topbar");
  return (
    <section className="topbar">
      <div className="topbar-div">
        <div></div>
        <img className="top-logo" src={top_logo}></img>
        <div className="shopping-cart">
          <FontAwesomeIcon icon={faShoppingCart} size="3x" />
          <div>{props.cartValue}</div>
          <div>
            <button type="button" className="btn btn-info">
              Przejdź do zamówienia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductList() {
  return (
    <div>
      <PizzaList />
      <Extras />
      <Salads />
      <Drinks />
    </div>
  );
}

function PizzaList() {
  return (
    <section className="pizzalist">
      {menu.map((pizza) => {
        return <OneRow key={pizza.id} pizza={pizza} type="pizza"></OneRow>;
      })}
    </section>
  );
}

function Extras() {
  return (
    <section className="pizzalist">
      <p>Lista dodatków</p>
      <OneRow name="Sos czosnkowy" type="sauce" />
      <OneRow name="Sos pomidorowy" type="sauce" />
      <OneRow name="Sos Tysiąca Wysp" type="sauce" />
    </section>
  );
}

function Salads() {
  return (
    <section className="pizzalist">
      <p>Lista dodatków</p>
      <OneRow name="Sałatka Gyros" type="salad" />
      <OneRow name="Sałatka grecka" type="salad" />
      <OneRow name="Sałatka Cezar" type="salad" />
    </section>
  );
}

function Drinks() {
  return (
    <section className="pizzalist">
      <p>Lista dodatków</p>
      <OneRow name="Woda" type="drink" />
      <OneRow name="Cola 0,2 l" type="drink" />
      <OneRow name="Cola 0,5 l" type="drink" />
      <OneRow name="Lemoniada 0,2 l" type="drink" />
    </section>
  );
}

export function LeftMenu() {
  return (
    <section className="leftmenu">
      <div className="leftrow">
        <p>
          <img src={horizontal_logo} className="horizontal-logo"></img>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />: +48 123 456 789
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />: pizza@site.com
        </p>
        <section>
          <FontAwesomeIcon icon={faClock} /> Godziny otwarcia:
          <ul>
            <li>Pon-Pt: : 10:00 - 20:00</li>
            <li>Sobota: 10:00 - 23:00</li>
            <li>Niedziela: Nieczynne</li>
          </ul>
        </section>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Szkolna 10, Siechnice
        </p>
      </div>
      <hr></hr>
      <div className="leftrow">
        <p>Menu</p>
        <p>Pizza</p>
        <p>Dodatki do pizzy</p>
        <p>Sałatki</p>
        <p>Napoje</p>
        test2
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <section className="footer">
      <p>
        Zrealizował Tomasz Solarewicz w celach edukacyjnych. Sprawdź co potrafię
        zrobić na
        <a href="https://github.com/mathematicianx/"> GITHUBie!</a>
      </p>
    </section>
  );
}

function Main() {
  let chosenList = [];
  let defaultSizeTextInfo = "Rozmiar pizzy";

  const [cartValue, setCartValue] = useState(0);
  menu.map((one_pos) => console.log(one_pos.number));
  useEffect(() => {
    let allSizeOfPizzas = document.querySelectorAll("#PizzaSize");
    Array.prototype.map.call(allSizeOfPizzas, (oneSize) => {
      oneSize.addEventListener("click", (e) => {
        if (e.target.innerText === defaultSizeTextInfo) {
          console.log("default value");
        } else {
          let chosenSize = { number: e.target.id, size: e.target.innerText };
          // return console.log(e.target.innerText, e.target.id);
          chosenList = [...chosenList, chosenSize];
          menu.forEach((menuOnePosition) => {
            chosenList.forEach((chosenElement) => {
              if (chosenElement.number === menuOnePosition.number.toString()) {
                // console.log(menuOnePosition.price["35cm"]);
                setCartValue(cartValue + menuOnePosition.price["35cm"]);
              }
            });
          });
        }
      });
    });
  });

  return (
    <section className="main">
      <TopBar cartValue={cartValue}></TopBar>
      <div className="background">
        <div className="layout">
          <LeftMenu />
          <ProductList />
        </div>
        <Footer />
      </div>
    </section>
  );
}

// ReactDom.render(<PizzaList />, document.getElementById("root"));
ReactDom.render(<Main />, document.getElementById("root"));
{
  /* <a href="https://www.freepik.com/photos/background">
  Background photo created by Racool_studio - www.freepik.com
</a>; */
}

{
  /* <a href='https://www.freepik.com/vectors/logo'>Logo vector created by freepik - www.freepik.com</a> */
}

{
  /* <span>Photo by <a href="https://unsplash.com/@briewilly?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/images/food/pizza?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */
}
