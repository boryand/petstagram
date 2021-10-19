import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ info }) => {
  return (
    <div>
      {info.map((entry, index) => {
        return (
          <div key={index} className= 'cont1'>
             <div className = 'cont2'>
            <h1 className='petlist'>
              {" "}
              <Link to={`/pets/${entry.fields.petName}`}>
                {" "}
                {entry.fields.petName}{" "}
              </Link>
            </h1>
            <Link to={`/pets/${entry.fields.petName}`}>
              <img className= 'basic' alt="" src={entry.fields.petPicture.fields.file.url} />{" "}
            </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
