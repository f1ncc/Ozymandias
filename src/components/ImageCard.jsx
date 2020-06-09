import React from "react";
import FormatName from "./FormatName";

const ImageCard = ({ char }) => {
  // const yes = "yes";
  let matchedStr;
  const name = char.name.toUpperCase();
  // .replace(
  //   /(Ac|Ag|Al|Am|Ar|As|At|Au|Ba|Bo|Be|Bh|Bi|Bk|Br|Ca|Cd|C|Ce|Cf|Cl|Cn|Cm|Co|Cr|Cs|Cu|Ds|Db|Dy|Er|Es|Eu|Fm|Fl|F|Fe|Fr|Ga|Gd|Ge|H|He|Hg|Hf|Ho|Hs|I|In|Ir|K|Kr|La|Li|Lr|Lv|Lu|Md|Mg|Mn|Mt|Mo|Mc|N|Na|Nb|Nd|Ne|Ni|Nh|No|Np|O|Og|Os|Pb|P|Pa|Pd|Po|Pr|Pm|Pt|Pu|Ra|Rb|Re|Rf|Rg|Rh|Rn|Ru|S|Sb|Sc|Sm|Sg|Se|Si|Sn|Sr|Ta|Tb|Tc|Te|Th|Ts|Tl|Ti|Tm|W|U|V|Xe|Y|Yb|Zn|Zr)/i,
  //   (match) => {
  //     matchedStr = match;
  //     return "*";
  //   }
  // );
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-100">
      <img src={char.img} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-black-500 text-cl mb-2">
          {
            // name.split("").map(function (char, i) {
            //   if (char === "*")
            //     return <FormatName key={i}>{matchedStr}</FormatName>;
            //   else return name;
            // })
            name
          }
        </div>
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
};

export default ImageCard;
