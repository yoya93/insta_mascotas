import React, { Fragment, useEffect, useState } from "react";

import { PhotoCard } from "../components/PhotoCard";
import { API } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ListOfCategories } from "../components/ListOfCategories";

export const ImagCateg = (props) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const photosData = await API.get("mascots", "/mascots/photocard");
        setState(photosData.data);
        setLoading(true);
        console.log(state);
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
