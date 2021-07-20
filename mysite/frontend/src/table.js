import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useParams } from "react-router-dom";
// MEDIA
import specific_logo from "./images/chad-montano-MqT0asuoIcU-unsplash.jpg";
import sauce_photo from "./images/pizza_sauce.png";
import salad_photo from "./images/salad_photo.jpg";
import drink_photo from "./images/drink_photo.jpg";

function DropdownSizeSelection(props) {
  let defaultSizeTextInfo = "Rozmiar pizzy";
  let [size, setSize] = useState(defaultSizeTextInfo);
  let handleSelect = (e) => {
    setSize(e);
  };

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
      <div className="container-quantity">
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
      <div className="specific-photo">
        <img src={specific_logo}></img>
      </div>
    );
  } else if (type === "sauce") {
    return (
      <div className="specific-photo">
        <img src={sauce_photo}></img>
      </div>
    );
  } else if (type === "salad") {
    return (
      <div className="specific-photo">
        <img src={salad_photo}></img>
      </div>
    );
  } else if (type === "drink") {
    return (
      <div className="specific-photo">
        <img src={drink_photo}></img>
      </div>
    );
  }
}

export const OneRow = (props) => {
  const { params } = useParams();
  const type = props.type;
  if (props.pizza) {
    const { name, number, ingredients } = props.pizza;
    if (ingredients) {
      return (
        <div className="one-pizza" key={number}>
          <div className="one-pizza-main">
            <WhichPhotoToServe type={type} />
            <div className="one-pizza-information">
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
          </div>
          <div className="one-pizza-aside">
            <DropdownSizeSelection number={number} />
            <DropdownQuantity number={number} />
            <Link to={`order_details/${number}`}>
              <button type="button" className="btn btn-info">
                Spersonalizuj pizzę
              </button>
            </Link>
          </div>
        </div>
      );
    }
  } else {
    const { name, number } = props;
    return (
      <div className="one-pizza">
        <div className="one-pizza-main">
          <WhichPhotoToServe type={type} />
          <div className="one-pizza-information">
            <div>
              <h1 style={{ height: "100%" }}>{name}</h1>
            </div>
          </div>
        </div>
        <div className="one-pizza-aside">
          <DropdownQuantity />
          <button type="button" className="btn btn-info">
            Dodaj do koszyka
          </button>
        </div>
      </div>
    );
  }
};

export const OneRow222 = (props) => {
  const { params } = useParams();
  const type = props.type;
  if (props.pizza) {
    const { name, id, pizza_ingredients } = props.pizza;
    if (pizza_ingredients) {
      return (
        <div className="one-pizza" key={id}>
          <div className="one-pizza-main">
            <WhichPhotoToServe type={type} />
            <div className="one-pizza-information">
              <h1>
                {id}. {name}
              </h1>
              <p>
                {pizza_ingredients.map((ingr) => {
                  const commSepIngr = [];
                  commSepIngr.push(ingr + ", ");
                  return commSepIngr;
                })}
              </p>
            </div>
          </div>
          <div className="one-pizza-aside">
            <DropdownSizeSelection number={id} />
            <DropdownQuantity number={id} />
            <Link to={`order_details/${id}`}>
              <button type="button" className="btn btn-info">
                Spersonalizuj pizzę
              </button>
            </Link>
          </div>
        </div>
      );
    }
  }
};
//     } else {
//       const { name, number } = props;
//       return (
//         <div className="one-pizza">
//           <div className="one-pizza-main">
//             <WhichPhotoToServe type={type} />
//             <div className="one-pizza-information">
//               <div>
//                 <h1 style={{ height: "100%" }}>{name}</h1>
//               </div>
//             </div>
//           </div>
//           <div className="one-pizza-aside">
//             <DropdownQuantity />
//             <button type="button" className="btn btn-info">
//               Dodaj do koszyka
//             </button>
//           </div>
//         </div>
//       );
//     }
//   }
// };
