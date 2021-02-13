import React from "react";
import ReactDom from "react-dom";
import Button from "react-bootstrap/Button";

// MEDIA
import specific_logo from "./images/chad-montano-MqT0asuoIcU-unsplash.jpg";

// CSS
import "./index.css";

// BOOTSTRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";

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
    </div>
  );
}

function PizzaList() {
  console.log("test");
  return (
    <section className="pizzalist">
      <OnePizzaRow name="1.Margherita" />
      <OnePizzaRow name="2.Hawaii" />
      <OnePizzaRow name="3.Prosciutto" />
      <OnePizzaRow name="4.Vegetariana" />
      <OnePizzaRow name="5.Siciliana" />
    </section>
  );
}

function Extras() {
  return (
    <section className="pizzalist">
      <p>Lista dodatków</p>
      <OnePizzaRow name="Sos czosnkowy" />
      <OnePizzaRow name="Sos pomidorowy" />
      <OnePizzaRow name="Sos Tysiąca Wysp" />
    </section>
  );
}

function LeftMenu() {
  return (
    <section className="leftmenu">
      <div className="leftrow">
        <p>Pizzeria</p>
        <p>telefon: 123 456 789</p>
        <p>email: test@test.com</p>
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

function OnePizzaRow(props) {
  return (
    <div>
      <ColoredLine color="#D3D3D3" />
      <div className="one-pizza">
        <PizzaSpecificPhoto />
        <h1 style={{ height: "100%" }}>{props.name}</h1>
        <button variant="outline-primary" className="btn-primary">
          Primary
        </button>
        <button variant="outline-secondary" className="btn-secondary">
          Secondary
        </button>
      </div>
    </div>
  );
}

function PizzaSpecificPhoto() {
  return <img className="specific-photo" src={specific_logo}></img>;
}

// function BookList() {
//   console.log(greeting);
//   return (
//     <section className="booklist">
//       {data.map((book, index) => {
//         return <SpecificBook key={book.id} {...book}></SpecificBook>;
//       })}
//     </section>
//   );
// }

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
