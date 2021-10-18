import React from "react";
import { Link } from "react-router-dom";

const PetList = ({ info }) => {
  return (
    <ul className="ul1">
      {info.map((entry, index) => {
        return (
          <li className="li1" key={index}>
            {" "}
            <Link to={`/pets/${entry.fields.petName}`}>
              {" "}
              {entry.fields.petName}{" "}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PetList;
