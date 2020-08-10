import React, { Fragment, useEffect, useState } from "react";
import { PhotoCard } from "../components/PhotoCard";
import { API } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";

export const Fav = (props) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

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
  ) : (
    <Fragment>
      <ul>
        {state.map(
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
