import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import { Helmet } from "react-helmet";
// import Search from "./components/Search";

function App() {
  const [characters, setChar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters/`)
      .then((res) => res.json())
      .then((data) => {
        setChar(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container mx-auto py-4">
      <Helmet>
        <style>{"body { background-color: black; }"}</style>
      </Helmet>
      {/* <Search searchText={(text) => setTerm(text)} />
      {!isLoading && characters.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32 text-white">
          No characters with that name
        </h1>
      )} */}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32 text-white">
          Hang on while it's loading..
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {characters.map((char) => (
            <ImageCard key={char.id} char={char} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
