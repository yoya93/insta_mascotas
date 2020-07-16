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
      setLocalStorage(!likes);
      const likesAument = props.likes + 1;
      const query = {
        // OPTIONAL
        body: {
          id: props.id,
          categoryId: props.categoryId,
          src: props.src,
          userId: props.userId,
          likes: likesAument,
        }, // replace this with attributes you need
        headers: {}, // OPTIONAL
      };
      const photosData = await API.put("mascots", "/mascots/photocard", query);
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
