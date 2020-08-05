import React from "react";
import { Nav, Link } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

const SIZE = "32px";

export const Navbar = () => {
  return (
    <div>
      <Nav>
        <Link exact to="/">
          <MdHome size={SIZE} />
        </Link>
        <Link exact to="/pet/:Category">
          <MdFavoriteBorder size={SIZE} />
        </Link>
        <Link exact to="/detail/:id">
          <MdPersonOutline size={SIZE} />
        </Link>
      </Nav>
    </div>
  );
};
