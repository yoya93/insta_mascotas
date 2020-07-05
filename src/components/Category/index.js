import React from "react";
import { Anchor, Image } from "./styles";

export const Category = (props) => {
  return (
    <div>
      <Anchor href={props.path}>
        <Image src={props.cover} />
        {props.emoji}
      </Anchor>
    </div>
  );
};
