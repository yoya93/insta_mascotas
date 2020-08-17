import React, { Fragment, useEffect, useState } from "react";

import { PhotoCard } from "../components/PhotoCard";
import { API } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ListOfCategories } from "../components/ListOfCategories";

import { useSelector } from "react-redux";

export const ImagCateg = (props) => {
  const photosData = useSelector((store) => store.photos.array);
  const loading = useSelector((store) => store.photos.loading);

  return (
    <Fragment>
      <ListOfCategories />
      {!loading ? (
        <LinearProgress />
      ) : (
        <Fragment>
          <ul>
            {photosData.map((photo) => {
              return (
                photo.categoryId === Number(props.match.params.Category) && (
                  <li key={photo.id}>
                    <PhotoCard {...photo} />
                  </li>
                )
              );
            })}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};
