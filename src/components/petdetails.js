import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PetDetails = ({ info }) => {
  const { nameOfPet } = useParams();

  const foundPet = info && info.find((pet) => pet.fields.petName === nameOfPet);

  console.log(info);
  return (
    <div className="petlist1">
      <div className="petlist2">
        <h1 className="petdetails"> {foundPet && foundPet.fields.petName} </h1>

        <img
          className="basic"
          src={foundPet && foundPet.fields.petPicture.fields.file.url}
        />
        <div className="contasiner1">
          <p className="text">
            {foundPet &&
              foundPet.fields.petDescription.content[0].content[0].value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
