import React, { Fragment, useState } from "react";

import { PhotoCard } from "../PhotoCard";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";

export const ListOfPhotoCards = (props) => {
  const { detailId } = props;

  const photosData = useSelector((store) => store.photos.array);
  let loading = useSelector((store) => store.photos.loading);

  return !loading ? (
    <LinearProgress />
  ) : detailId ? (
    <Fragment>
      <ul>
        {photosData.map((photo) => {
          return (
            photo.id === detailId && <PhotoCard key={photo.id} {...photo} />
          );
        })}
      </ul>
    </Fragment>
  ) : (
    <Fragment>
      <ul>
        {photosData.map((photo) => (
          <li key={photo.id}>
            <PhotoCard {...photo} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
