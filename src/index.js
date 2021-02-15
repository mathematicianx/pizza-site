import React, { useState } from "react";
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
import top_logo from "./images/big_logo_uptop_Flatten.png";

// CSS
import "./index.css";

// BOOTSTRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Popper from "popper.js";
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.js";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function TopBar() {
  console.log("topbar");
  return (
    <section className="topbar">
      <div className="topbar-div">
        <img className="top-logo" src={top_logo}></img>
      </div>
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
  const menu = [
    {
      number: 1,
      name: "Margerita",
      ingredients: ["Ser mozarella", "Sos pomidorowy", "Bazylia"],
    },
    {
      number: 2,
      name: "Hawaii",
      ingredients: ["Ser mozarella", "Sos pomidorowy", "Ananas", "Szynka"],
    },
    {
      number: 3,
      name: "Prosciutto Fungi",
      ingredients: ["Ser mozarella", "Sos pomidorowy", "Pieczarki", "Szynka"],
    },
    {
      number: 4,
      name: "Vegetariana",
      ingredients: [
        "Brokuły",
        "Sos pomidorowy",
        "Pieczarki",
        "Pomidory Koktajlowe",
        "Rukola",
      ],
    },
    {
      number: 5,
      name: "Siciliana",
      ingredients: [
        "Cebula",
        "Sos pomidorowy",
        "Kapary",
        "Pomidory Koktajlowe",
        "Tuńczyk",
      ],
    },
  ];
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
  const type = props.type;
  if (type === "pizza") {
    return (
      <div>
        <img className="specific-photo" src={specific_logo}></img>
      </div>
    );
  } else if (type === "sauce") {
    return <img className="specific-photo" src={sauce_photo}></img>;
  } else if (type === "salad") {
    return <img className="specific-photo" src={salad_photo}></img>;
  } else if (type === "drink") {
    return <img className="specific-photo" src={drink_photo}></img>;
  }
}

function DropdownPizzaSizeSelection() {
  let [value, setValue] = useState("Rozmiar pizzy");
  let handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <div className="dropdown">
      <DropdownButton
        title={value}
        id="dropdown-menu-align-right"
        variant="info"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="35 cm">35 cm - 20zł</Dropdown.Item>
        <Dropdown.Item eventKey="45 cm">45 cm - 28 zł</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

function DropdownPizzaQuantity() {
  let [quantity, setValue] = useState("Ilość");
  let handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  return (
    <div className="dropdown">
      <DropdownButton
        title={quantity}
        id="dropdown-menu-align-right"
        variant="info"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="1">1</Dropdown.Item>
        <Dropdown.Item eventKey="2">2</Dropdown.Item>
        <Dropdown.Item eventKey="3">3</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

const OneRow = (props) => {
  const type = props.type;
  if (props.pizza) {
    const { name, number, ingredients } = props.pizza;
    if (ingredients) {
      return (
        <div>
          <ColoredLine color="#D3D3D3" />
          <div className="one-pizza">
            <WhichPhotoToServe type={type} />
            <div>
              <h1>
                {number}. {name}
              </h1>
              <p>
                {ingredients.map((ingr) => {
                  const commSepIngr = [];
                  commSepIngr.push(ingr + ", ");
                  return commSepIngr;
                })}
              </p>
            </div>
            <DropdownPizzaSizeSelection />
            <DropdownPizzaQuantity />
            <div>
              <button type="button" className="btn btn-info">
                Przejdź do zamówienia
              </button>
            </div>
          </div>
        </div>
      );
    }
  } else {
    const { name, number } = props;
    return (
      <div>
        <ColoredLine color="#D3D3D3" />
        <div className="one-pizza">
          <WhichPhotoToServe type={type} />
          <div>
            <h1 style={{ height: "100%" }}>{name}</h1>
          </div>
          <DropdownPizzaSizeSelection />
          <DropdownPizzaQuantity />
          <div>
            <button type="button" className="btn btn-info">
              Przejdź do zamówienia
            </button>
          </div>
        </div>
      </div>
    );
  }
};

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
