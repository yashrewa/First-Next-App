import Movie_Detail from "./movieDetails";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io"

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      movie +
      "?api_key=" +
      process.env.API_KEY
  );
  const res = await data.json();
  console.log(res);

  return (
    <div className="bg-black" >
        <div className="text-3xl py-8"> <Link className="" href="/"><IoIosArrowBack /></Link> </div>
    <div className="flex h-screen justify-center bg-slate-700 shadow-md shadow-slate-900 lg:m-12 rounded-xl">
      <div className="w-auto h-max lg:w-5/6">
        <Movie_Detail {...res} />
      </div>
    </div>
    </div>
  );
}
