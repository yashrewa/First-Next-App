import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, release_date, key, id, poster_path }) {

  const imagePath = "https://image.tmdb.org/t/p/w500/"
    
  return (
    <div className="flex-grow-0 mb-20 hover:shadow-cyan-400 hover:shadow-lg hover:scale-110 duration-300">
      <Link href={"/"+id}>
        <Image className="" src={imagePath + poster_path} alt="" width={500} height={800} />
      </Link>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
    </div>
  );
}
