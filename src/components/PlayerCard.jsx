import React, { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  const [image, setImage] = useState(false);
  const change = () => setImage(!image);

  return (
    <div onClick={change} className="card col-md-6 col-lg-4 col-xl-3">
      {image ? (
        <ul className="listStats">
          {statistics.map((stat, index) => (
            <li key={index}>{stat}</li>
          ))}
        </ul>
      ) : (
        <>
          <img src={img} alt={`${name}`} />
        </>
      )}
      <p className="text-center fw-bold h4 p-3">{name}</p>
    </div>
  );
};

export default PlayerCard;
