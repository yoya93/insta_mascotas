import React, { Fragment } from "react";
import { PhotoCard } from "../components/PhotoCard";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";

export const Fav = () => {
  const photosData = useSelector((store) => store.photos.array);
  let loading = useSelector((store) => store.photos.loading);
  let numFav = false;

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
                {(numFav = true)}
              </li>
            )
        )}
      </ul>
      <div>
        {!numFav && (
          <Alert variant="filled" severity="warning">
            You have not selected favorites
          </Alert>
        )}
      </div>
    </Fragment>
  );
};
