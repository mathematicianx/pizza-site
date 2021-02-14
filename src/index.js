import React from "react";
import ReactDom from "react-dom";
import Button from "react-bootstrap/Button";

// FONTS AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

// MEDIA
import specific_logo from "./images/chad-montano-MqT0asuoIcU-unsplash.jpg";
import horizontal_logo from "./images/pizza-seeklogo.com_horizontal_bar.png";
import sauce_photo from "./images/pizza_sauce.png";
import salad_photo from "./images/salad_photo.jpg";
import drink_photo from "./images/drink_photo.jpg";

// CSS
import "./index.css";

// BOOTSTRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Popper from "popper.js";
import "jquery/dist/jquery.js";

import "bootstrap/dist/js/bootstrap.js";

function TopBar() {
  console.log("topbar");
  return (
    <section className="topbar">
      <h3>test</h3>
    </section>
  );
}

function ProductList() {
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
  console.log("test");
  return (
    <section className="pizzalist">
      <OneRow name="1.Margherita" id="pizza" />
      <OneRow name="2.Hawaii" id="pizza" />
      <OneRow name="3.Prosciutto" id="pizza" />
      <OneRow name="4.Vegetariana" id="pizza" />
      <OneRow name="5.Siciliana" id="pizza" />
    </section>
  );
}

function Extras() {
  return (
    <section className="pizzalist">
      <p>Lista dodatków</p>
      <OneRow name="Sos czosnkowy" id="sauce" />
      <OneRow name="Sos pomidorowy" id="sauce" />
      <OneRow name="Sos Tysiąca Wysp" id="sauce" />
    </section>
  );
}

function Salads() {
  return (
    <section className="pizzalist">
      <p>Lista dodatków</p>
      <OneRow name="Sałatka Gyros" id="salad" />
      <OneRow name="Sałatka grecka" id="salad" />
      <OneRow name="Sałatka Cezar" id="salad" />
    </section>
  );
}

function Drinks() {
  return (
    <section className="pizzalist">
      <p>Lista dodatków</p>
      <OneRow name="Woda" id="drink" />
      <OneRow name="Cola 0,2 l" id="drink" />
      <OneRow name="Cola 0,5 l" id="drink" />
      <OneRow name="Lemoniada 0,2 l" id="drink" />
    </section>
  );
}

function LeftMenu() {
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

function Footer() {
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

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.1,
      width: "100%",
    }}
  />
);

function WhichPhotoToServe(props) {
  const id = props.id;
  if (id === "pizza") {
    return <img className="specific-photo" src={specific_logo}></img>;
  } else if (id === "sauce") {
    return <img className="specific-photo" src={sauce_photo}></img>;
  } else if (id === "salad") {
    return <img className="specific-photo" src={salad_photo}></img>;
  } else if (id === "drink") {
    return <img className="specific-photo" src={drink_photo}></img>;
  }
}

function DropdownPizzaSizeSelection() {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Wybierz rozmiar pizzy
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          35 cm - 20 zł
        </a>
        <a class="dropdown-item" href="#">
          45 cm - 28 zł
        </a>
      </div>
    </div>
  );
}

function DropdownPizzaQuantity() {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Ilość
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          1
        </a>
        <a class="dropdown-item" href="#">
          2
        </a>
        <a class="dropdown-item" href="#">
          3
        </a>
        <a class="dropdown-item" href="#">
          4
        </a>
        <a class="dropdown-item" href="#">
          5
        </a>
      </div>
    </div>
  );
}

function OneRow(props) {
  const id = props.id;
  return (
    <div>
      <ColoredLine color="#D3D3D3" />
      <div className="one-pizza">
        <WhichPhotoToServe id={id} />
        <h1 style={{ height: "100%" }}>{props.name}</h1>
        <DropdownPizzaSizeSelection />
        <DropdownPizzaQuantity />
      </div>
    </div>
  );
}

function Main() {
  return (
    <section className="main">
      <TopBar />
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
