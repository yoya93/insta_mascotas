import React, { useRef, useEffect, useState } from "react";
import { Img, ImgWrapper, Button, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { putPhotoAccion } from "../../redux/PhotoDucks";

export const PhotoCard = (props) => {
  const { id } = props;
  const key = `like-${id}`;
  const dispatch = useDispatch();

  const [numLikes, setNumLikes] = useState(props.likes);

  const element = useRef(null);
  const [show, setShow] = useState(false);
  const [likes, setLikes] = useState(() => {
    try {
      const like = window.localStorage.getItem(key) === "true";
      return like;
    } catch (error) {
      console.log(error);

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
    let currentLike = numLikes;
    setLocalStorage(!likes);
    likes ? (currentLike = currentLike - 1) : (currentLike = currentLike + 1);

    const query = {
      // OPTIONAL
      body: {
        id: props.id,
        categoryId: props.categoryId,
        src: props.src,
        userId: props.userId,
        likes: currentLike,
      }, // replace this with attributes you need
      headers: {}, // OPTIONAL
    };
    dispatch(putPhotoAccion(query));
  };
  return (
    <Article ref={element}>
      {show && (
        <div>
          <Link to={`/detail/${props.id}`}>
            <ImgWrapper>
              <Img src={props.src} />
            </ImgWrapper>
          </Link>
          <Button
            onClick={() => {
              !likes ? setNumLikes(numLikes + 1) : setNumLikes(numLikes - 1);
              putData();
            }}
          >
            {!likes ? (
              <MdFavoriteBorder size="32px" />
            ) : (
              <MdFavorite size="32px" />
            )}
            {numLikes} likes
          </Button>
        </div>
      )}
    </Article>
  );
};
