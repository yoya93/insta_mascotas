import React, { Fragment, useEffect, useState } from "react";

import { PhotoCard } from "../PhotoCard";
import { API } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";

export const ListOfPhotoCards = (props) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const { detailId } = props;

  useEffect(() => {
    const getData = async () => {
      try {
        const photosData = await API.get("mascots", "/mascots/photocard");
        setState(photosData.data);
        setLoading(true);
      } catch (err) {
        console.log("error fetching from Lambda API");
      }
    };

    getData();
  }, []);
  return !loading ? (
    <LinearProgress />
  ) : detailId ? (
    <Fragment>
      <ul>
        {state.map((photo) => {
          return (
            photo.id === detailId && <PhotoCard key={photo.id} {...photo} />
          );
        })}
      </ul>
    </Fragment>
  ) : (
    <Fragment>
      <ul>
        {state.map((photo) => (
          <li key={photo.id}>
            <PhotoCard {...photo} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
