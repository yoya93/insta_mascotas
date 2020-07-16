import React, { useRef, useEffect, useState } from "react";
import { Img, ImgWrapper, Button, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { API } from "aws-amplify";

import { uuid } from "uuidv4";

console.log(uuid());

export const PhotoCard = (props) => {
  const { id } = props;
  const key = `like-${id}`;

  const element = useRef(null);
  const [show, setShow] = useState(false);
  const [likes, setLikes] = useState(() => {
    try {
      const like = window.localStorage.getItem(key);
      return like;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);

  const setLocalStorage = (valor) => {
    try {
      window.localStorage.setItem(key, valor);
      setLikes(valor);
    } catch (e) {
      console.log(e);
    }
  };

  const putData = async () => {
    try {
      const data = {
        id: 56,
        categoryId: 2,
        src:
          "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png",
        userId: 100,
        likes: 37,
      };

      const photosData = await API.put(
        "amplifyrestapi",
        "/mascot/photocard/0",
        {
          data,
        }
      );
      console.log(photosData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Article ref={element}>
      {show && (
        <div>
          <a href={`/?detail=${props.id}`}>
            <ImgWrapper>
              <Img src={props.src} />
            </ImgWrapper>
          </a>
          <Button onClick={putData}>
            {likes ? (
              <MdFavorite size="32px" />
            ) : (
              <MdFavoriteBorder size="32px" />
            )}
            {props.likes} likes
          </Button>
        </div>
      )}
    </Article>
  );
};
