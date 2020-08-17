import React, { Fragment } from "react";
import { PhotoCard } from "../components/PhotoCard";
import { API } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";

export const Fav = () => {
  const photosData = useSelector((store) => store.photos.array);
  let loading = useSelector((store) => store.photos.loading);

  return !loading ? (
    <LinearProgress />
  ) : (
    <Fragment>
      <ul>
        {photosData.map(
          (photo) =>
            window.localStorage.getItem(`like-${photo.id}`) === "true" && (
              <li key={photo.id}>
                <PhotoCard {...photo} />
              </li>
            )
        )}
      </ul>
    </Fragment>
  );
};
