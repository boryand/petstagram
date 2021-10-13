import React from "react";

const Posts = ({ info }) => {
  return (
    <div>
      {info.map((entry, index) => {
        return (
          <div key={index}>
            <h1> {entry.fields.petName} </h1>
           <img src={entry.fields.petPicture.fields.file.url}/>
         
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
// items[0].fields.petPicture.fields.file.url