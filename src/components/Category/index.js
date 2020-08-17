import React from "react";
import { Link, Image } from "./styles";

export const Category = (props) => {
  return (
    <div>
      <Link to={props.path}>
        <Image src={props.cover} />
        {props.emoji}
      </Link>
    </div>
  );
};
