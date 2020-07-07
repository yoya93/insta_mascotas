import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import { categories } from "../../api/db.json";

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);

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

  const ListRender = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
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
