import React from "react";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
export const detailPhoto = (props) => {
  return (
    <div>
      <ListOfPhotoCards detailId={props.match.params.id} />
    </div>
  );
};
