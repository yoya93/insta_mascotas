import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

import { useSelector } from "react-redux";

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

  const categories = useSelector((store) => store.categories.array);

  const ListRender = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
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
