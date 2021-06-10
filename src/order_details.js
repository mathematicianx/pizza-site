import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "./index";
import { menu, additives } from "./data.js";

export const OrderDetails = () => {
  const {
    finalSize,
    setFinalSize,
    finalQuantity,
    setFinalQuantity,
    finalAdditives,
    setFinalAdditives,
    reset,
  } = React.useContext(CartContext);
  const { id } = useParams();
  const current_pizza = menu.find((pizza) => pizza.number === parseInt(id));
  const ingredients_buttons = current_pizza.ingredients.map((oneIngredient) => {
    return (
      <button
        type="button"
        key={oneIngredient.number}
        className="btn btn-info mr-1"
        disabled
      >
        {oneIngredient}
      </button>
    );
  });

  const importedAdditives = additives.map((add) => {
    const { number, name, price } = add;
    return { number, name, price, boxChecked: "no" };
  });

  const [additivesModified, setAdditivesModified] = useState(importedAdditives);

  const additivesChecked = (event, checkStatus) => {
    additivesModified.find((oneAdditive) => {
      if (oneAdditive.name === event.target.name) {
        const copiedAdditives = [...additivesModified];
        const index = additivesModified.indexOf(oneAdditive);
        const updatedAdditive = {
          number: additivesModified[index].number,
          name: additivesModified[index].name,
          price: additivesModified[index].price,
          boxChecked: checkStatus,
        };
        copiedAdditives[index] = updatedAdditive;
        setAdditivesModified(copiedAdditives);
      }
    });
  };

  const additives_boxes = additives.map((oneAdditive) => {
    return (
      <div className="oneAdd">
        <input
          className="radio mr-1" /* mr-1 is from bootstrap for spacing */
          type="checkbox"
          key={oneAdditive.id}
          id={oneAdditive.id}
          name={oneAdditive.name}
          onClick={(e) => {
            e.target.checked === true
              ? additivesChecked(e, "yes")
              : additivesChecked(e, "no");
          }}
        ></input>
        <label for={oneAdditive.name}>
          {oneAdditive.name} - {oneAdditive.price} zł
        </label>
      </div>
    );
  });

  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("35");
  const [finishedOrder, setFinishedOrder] = useState({});
  const [finalAdditivesUpdateable, setFinalAdditivesUpdateable] = useState([]);
  /* please continue */
  useEffect(() => {
    additivesModified.map((oneAdditive) => {
      if (oneAdditive.boxChecked === "yes") {
        if (!finalAdditivesUpdateable.includes(oneAdditive.number))
          setFinalAdditivesUpdateable([
            ...finalAdditivesUpdateable,
            oneAdditive.number,
          ]);
        console.log(
          size,
          quantity,
          oneAdditive.number,
          finalAdditivesUpdateable
        );
      } else if (oneAdditive.boxChecked === "no") {
        if (finalAdditivesUpdateable.includes(oneAdditive.number))
          setFinalAdditivesUpdateable(
            finalAdditivesUpdateable.filter(
              (element) => element != oneAdditive.number
            )
          );
      } else setFinalAdditivesUpdateable([]);
      setFinishedOrder({
        id: id,
        size: size,
        quantity: quantity,
        finalAdditivesUpdateable: finalAdditivesUpdateable,
      });
    });
  }, [size, quantity, additivesModified, finalAdditivesUpdateable]);

  return (
    <React.Fragment>
      <main>
        <div className="pizzalist-specific">
          <section className="mealQuantity">
            <h3>Ile posiłków chcesz zamówić?</h3>
            <button
              type="button"
              className="btn btn-info mr-1"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <button type="button" className="btn btn-info mr-1">
              {quantity}
            </button>
            <button
              type="button"
              className="btn btn-info mr-1"
              onClick={() => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </button>
          </section>
          <section>
            <h3>Wybierz rozmiar pizzy</h3>
            <input
              type="radio"
              name="buttonGroup"
              value="one"
              id="one"
              onClick={() => {
                setSize("35");
              }}
              defaultChecked
            ></input>
            <label for="one">35cm - {current_pizza.price["35cm"]}zł</label>
            <input
              type="radio"
              name="buttonGroup"
              value="two"
              id="two"
              onClick={() => {
                setSize("45");
              }}
            ></input>
            <label for="two">45cm - {current_pizza.price["45cm"]}zł</label>
          </section>
          <section>
            <h3>Składniki</h3>
            {ingredients_buttons}
          </section>
          <section>
            <h3>Lista dodatków</h3>
            <div className="additives-list">{additives_boxes}</div>
          </section>
          <section className="add-item">
            <button
              className="btn btn-info mr-1"
              onClick={() => {
                console.log(finalAdditivesUpdateable);
                setFinalQuantity(finishedOrder.quantity);
                setFinalSize(finishedOrder.size);
                setFinalAdditives(finishedOrder.finalAdditivesUpdateable);
              }}
            >
              Dodaj do zamówienia
            </button>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};
