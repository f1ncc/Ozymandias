import React from "react";

const ImageCard = ({ char }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-100">
    <img src={char.img} alt="" className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-black-500 text-cl mb-2">{char.name}</div>
      <ul>
        <li>
          <strong>Occupation: </strong>
          {char.occupation[0]}
        </li>
        <li>
          <strong>Nickname: </strong>
          {char.nickname}
        </li>
        <li>
          <strong>Portrayed by: </strong>
          {char.portrayed}
        </li>
      </ul>
    </div>
  </div>
);

export default ImageCard;
