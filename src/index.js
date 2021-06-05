import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import { OneRow } from "./table";
import { OrderDetails } from "./order_details";
// DATA
import { menu } from "./data.js";

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
            <Link to="/order_summary">
              <button type="button" className="btn btn-info">
                Przejdź do zamówienia
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductList() {
  return (
    <div key="productList">
      <PizzaList key="pizzalist" />
      <Extras key="extras" />
      <Salads key="salads" />
      <Drinks key="drinks" />
    </div>
  );
}

function PizzaList() {
  return (
    <section className="pizzalist">
      {menu.map((pizza) => {
        return <OneRow key={pizza.number} pizza={pizza} type="pizza"></OneRow>;
      })}
    </section>
  );
}

function Extras() {
  return (
    <section className="pizzalist">
      <p>Lista dodatków</p>
      <OneRow name="Sos czosnkowy" type="sauce" key="Sos czosnkowy" />
      <OneRow name="Sos pomidorowy" type="sauce" key="Sos pomidorowy" />
      <OneRow name="Sos Tysiąca Wysp" type="sauce" key="Sos Tysiąca Wysp" />
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
  const [cartValue, setCartValue] = useState(0);
  const [cartObjects, setCartObjects] = useState([0]);
  const [activeSize, setActiveSize] = useState("");
  const [activeQuantity, setActiveQuantity] = useState(0);
  const [tId, setTId] = useState("");

  useEffect(() => {
    let available = ["1", "2", "3", "4", "5"];
    function dropdownSelection(e) {
      if (available.includes(e.target.id)) {
        console.log(e.target.id);
        setActiveSize(activeSize + e.target.innerText); // TODO make this work for a list
      } else if (e.target.id === "quantityLess") {
        setActiveQuantity(() => {
          console.log(e.target.id);
          return activeQuantity - 1;
        });
      } else if (e.target.id === "quantityMore") {
        setActiveQuantity(() => {
          console.log(e.target.id);
          return activeQuantity + 1;
        });
      }
      return setTId(e.target.id);
    }
    console.log("useEffect");
    let pizzaRows = document.querySelectorAll(".one-pizza");
    pizzaRows.forEach((row) => {
      row.addEventListener("click", dropdownSelection);
      setCartValue(() => {
        return activeSize + activeQuantity;
      });
    });
    return () => {
      console.log("cleanup function");
      pizzaRows.forEach((row) => {
        row.removeEventListener("click", dropdownSelection);
      });
    };
  }, [activeQuantity, activeSize]);

  return (
    <Router>
      <Switch>
        <section className="main">
          <TopBar cartValue={cartValue}></TopBar>
          <div className="background">
            <div className="layout">
              <LeftMenu />
              <Route exact path="/">
                <ProductList />
              </Route>
              <Route path="/order_summary">Order summary</Route>
              <Route path="/order_details/:id" children={<OrderDetails />}>
                <OrderDetails />
                Order details
              </Route>
            </div>
            <Footer />
          </div>
        </section>
      </Switch>
    </Router>
  );
}

ReactDom.render(<Main />, document.getElementById("root"));

/* <a href="https://www.freepik.com/photos/background">
  Background photo created by Racool_studio - www.freepik.com
</a>; */

/* <a href='https://www.freepik.com/vectors/logo'>Logo vector created by freepik - www.freepik.com</a> */

/* <span>Photo by <a href="https://unsplash.com/@briewilly?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/images/food/pizza?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */
