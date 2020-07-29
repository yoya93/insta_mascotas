import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

import { API } from "aws-amplify";

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const [state, setState] = useState([]);

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;

        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);
      return () => document.removeEventListener("scroll", onScroll);
    },

    [showFixed]
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const categoriesData = await API.get("mascots", "/mascots");

        setState(categoriesData.data);
      } catch (err) {
        console.log("error fetching from Lambda APIwwwww");
      }
    };

    getData();
  }, []);

  const ListRender = (fixed) => (
    <List fixed={fixed}>
      {state.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  );

  return (
    <div>
      {ListRender()}
      {showFixed && ListRender(true)}
    </div>
  );
};
