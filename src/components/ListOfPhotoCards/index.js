import React from "react";
import { photos } from "../../api/db.json";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCards = () => {
  return (
    <div>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <PhotoCard {...photo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
