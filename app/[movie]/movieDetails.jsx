import Image from "next/image";
export default function Movie_Detail({
  backdrop_path,
  id,
  title,
  tagline,
  belongs_to_collection,
  release_date,
  runtime,
  vote_average,
  overview
}) {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const backgroundImagePath =
    "https://image.tmdb.org/t/p/w500/w1920_and_h800_multi_faces";

  return (
    <div className="flex justify-between mt-12 rounded-xl h-max">
      <div className="text-slate-300 m-2 ">
        <div className="text-lg lg:text-4xl font-bold"><span className="text-orange-700">{title.charAt(0)}</span>{title.substring(1)}</div>
        <div className="text-xs lg:text-base font-extrabold space-x-4">{release_date}</div>
        <div className="text-sm lg:text-base">{tagline}</div>
        <div className="text-sm lg:text-base">{runtime} Mins</div>
        <div className="text-sm lg:text-base">
          Rating: {vote_average.toFixed(1)}
        </div>
        <div className="text-sm lg:text-base w-3/4"> {overview} </div>
      </div>
      <div>
        <div className="m-2 lg:m-2 ">
          <Image
            className="text-center rounded-xl"
            src={imagePath + backdrop_path}
            width={800}
            height={400}
            priority
          ></Image>
        </div>
      </div>
    </div>
  );
}
