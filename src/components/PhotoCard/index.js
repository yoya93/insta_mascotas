import React from "react";
import { Img, ImgWrapper, Button } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

export const PhotoCard = (props) => {
  console.log(props);
  console.log(props.id);
  return (
    <article>
      <a href={`/detail/${props.id}`}>
        <ImgWrapper>
          <Img src={props.src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size="32px" /> {props.likes} likes
      </Button>
    </article>
  );
};
