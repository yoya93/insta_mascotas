import React, { Fragment, useEffect, useState } from "react";

import { PhotoCard } from "../components/PhotoCard";
import { API } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ListOfCategories } from "../components/ListOfCategories";

export const ImagCateg = (props) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(props.location.pathname);

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
  return (
    <Fragment>
      <ListOfCategories />
      {!loading ? (
        <LinearProgress />
      ) : (
        <Fragment>
          <ul>
            {state.map((photo) => {
              return (
                "/pet/" + photo.categoryId === props.location.pathname && (
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
