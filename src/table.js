import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

// MEDIA
import specific_logo from "./images/chad-montano-MqT0asuoIcU-unsplash.jpg";
import sauce_photo from "./images/pizza_sauce.png";
import salad_photo from "./images/salad_photo.jpg";
import drink_photo from "./images/drink_photo.jpg";

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

function DropdownSizeSelection(props) {
  let defaultSizeTextInfo = "Rozmiar pizzy";
  let [size, setSize] = useState(defaultSizeTextInfo);
  let handleSelect = (e) => {
    setSize(e);
  };

  // let chosenList = [];

  // useEffect(() => {
  //   let allSizeOfPizzas = document.querySelectorAll("#PizzaSize");
  //   Array.prototype.map.call(allSizeOfPizzas, (oneSize) => {
  //     oneSize.addEventListener("click", (e) => {
  //       if (e.target.innerText === defaultSizeTextInfo) {
  //         console.log("default value");
  //       } else {
  //         let chosenSize = { number: e.target.id, size: e.target.innerText };
  //         // return console.log(e.target.innerText, e.target.id);
  //         chosenList = [...chosenList, chosenSize];
  //         console.log(chosenList);
  //         return chosenList;
  //       }
  //     });
  //   });
  // });

  return (
    <div className="dropdown" id="PizzaSize" key={props.number}>
      <DropdownButton
        title={size}
        size={size}
        variant="info"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="35 cm" id={props.number}>
          35 cm
        </Dropdown.Item>
        <Dropdown.Item eventKey="45 cm" id={props.number}>
          45 cm
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

function DropdownQuantity() {
  let [quantity, setValue] = useState(0);
  let handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  return (
    <>
      <div>
        <button
          id="quantityLess"
          type="button"
          className="btn btn-info"
          onClick={() => {
            if (quantity > 0) {
              setValue(quantity - 1);
            }
          }}
        >
          {"<"}
        </button>
        <button type="button" className="btn btn-info" id="quantity">
          {quantity}
        </button>
        <button
          id="quantityMore"
          type="button"
          className="btn btn-info"
          onClick={() => setValue(quantity + 1)}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

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

export const OneRow = (props) => {
  const type = props.type;
  if (props.pizza) {
    const { name, number, ingredients } = props.pizza;
    if (ingredients) {
      return (
        <div key={number}>
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
            <DropdownSizeSelection number={number} />
            <DropdownQuantity />
            <div>
              <button type="button" className="btn btn-info">
                Spersonalizuj swoją pizzę
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
          <DropdownQuantity />
          <div>
            <button type="button" className="btn btn-info">
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    );
  }
};
