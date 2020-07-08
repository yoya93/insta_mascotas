import React, { useEffect, useState } from "react";

import { PhotoCard } from "../PhotoCard";
import { API } from "aws-amplify";
import LinearProgress from "@material-ui/core/LinearProgress";

export const ListOfPhotoCards = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getPlans = async () => {
      try {
        const photosData = await API.get("amplifyrestapi", "/mascot/photocard");
        setState(photosData.photocard);
        setLoading(true);
      } catch (err) {
        console.log("error fetching from Lambda API");
      }
    };

    console.log(state);

    getPlans();
  }, []);
  return !loading ? (
    <LinearProgress />
  ) : (
    <div>
      <ul>
        {state.map((photo) => (
          <li key={photo.id}>
            <PhotoCard {...photo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
