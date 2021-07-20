import React, { useEffect, useState } from "react";

export const FetchMenu = () => {
  const [fetchedMenu, setFetchedMenu] = useState([]);

  const getData = async () => {
    console.log(fetchedMenu);
    const response = await fetch("http://localhost:8000/ingredients/");
    const data = await response.json();
    setFetchedMenu(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return fetchedMenu;
};
