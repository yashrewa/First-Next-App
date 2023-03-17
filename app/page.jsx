

// import { useState } from "react";
import Movie from "./Movie";

export default async function Home() {
  // const [allMovie, setAllMovie] = useState([]);
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=" + process.env.API_KEY
  );
  const res = await data.json();
  return (
    <main>
      {/* <div className="block"><button className="mx-auto border-2 py-1 px-2 m-3 rounded-md border-white">TRENDING</button></div> */}
      <div className="flex justify-evenly flex-wrap">
      {res.results.map((movie) => {
        return (
          
          <Movie
            {...movie}
          />
        );
      })}
      </div>
    </main>
  );
}
