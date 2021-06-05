import React, { useState } from "react";
import ReactDom from "react-dom";
import { useParams } from "react-router-dom";

import { menu, additives } from "./data.js";

export const OrderDetails = () => {
  const { id } = useParams();
  const current_pizza = menu.find((pizza) => pizza.number === parseInt(id));
  const ingredients_buttons = current_pizza.ingredients.map((oneIngredient) => {
    return <button key={oneIngredient.number}>{oneIngredient}</button>;
  });
  const additives_boxes = additives.map((oneAdditive) => {
    return (
      <div>
        <input
          type="checkbox"
          key={oneAdditive.id}
          id={oneAdditive.id}
          name={oneAdditive.name}
        ></input>
        <label for={oneAdditive.name}>{oneAdditive.name}</label>
      </div>
      // /* <button key={oneAdditive.id}>{oneAdditive.name}</button> */
    );
  });

  return (
    <React.Fragment>
      <div className="layout">
        <div key="productList">
          <section>
            <h3>Ile posiłków chcesz zamówić?</h3>
            <button>+</button>
            <button>-</button>
          </section>
          <section>
            <h3>Wybierz rozmiar pizzy</h3>
            <button>35cm - {current_pizza.price["35cm"]}zł</button>
            <button>45cm - {current_pizza.price["45cm"]}zł</button>
          </section>
          <section>
            <h3>Składniki</h3>
            {ingredients_buttons}
          </section>
          <section>
            <h3>Lista dodatków</h3>
            {additives_boxes}
          </section>
          {current_pizza.number}
          {current_pizza.name}
          {current_pizza.ingredients}
          <h2>{id}</h2>
        </div>
      </div>
    </React.Fragment>
  );
};
