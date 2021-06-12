import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "./index";
import { menu, additives } from "./data.js";

export const OrderSummary = () => {
  const { finalPizzaAdded } = React.useContext(CartContext);
  let finalPrice = 0;
  return (
    <React.Fragment>
      <main>
        <div className="pizzalist-specific">
          {/* this function searches for name and price of pizza based on ID */}
          {finalPizzaAdded.map(
            (orderedPizza) => {
              let name = "";
              let pizzaPrice = 0;
              let add = [];
              menu.map((element) => {
                if (element.number === parseInt(orderedPizza.id)) {
                  name = element.name;
                  pizzaPrice = element.price[orderedPizza.size];
                  finalPrice = finalPrice + pizzaPrice;
                }
              });
              // this part searches for additive name and price
              if (orderedPizza.additives) {
                orderedPizza.additives.forEach((additive) =>
                  additives.map((element) => {
                    if (additive === element.number) {
                      add.push({
                        addName: element.name,
                        addPrice: element.price,
                      });
                      finalPrice = finalPrice + element.price;
                    }
                  })
                );
              }
              return (
                <div>
                  <h1>nazwa pizzy: {name}</h1>
                  <p>rozmiar: {orderedPizza.size}</p>
                  <p>ilość: {orderedPizza.quantity}</p>
                  <p>cena: {pizzaPrice}zl</p> dodatki
                  {add.map((element) => {
                    return (
                      <p>
                        {element.addName} {element.addPrice}
                      </p>
                    );
                  })}
                  Finalna cena: {finalPrice}zł
                  <hr></hr>
                </div>
              );
            }
            // {finalPrice = finalPrice + }
          )}
        </div>
      </main>
    </React.Fragment>
  );
};
