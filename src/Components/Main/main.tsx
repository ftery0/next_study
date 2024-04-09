import Link from "next/link";
import {moview} from "src/types/movies/movies.types"
const url = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMoveies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const respoense = await fetch(url);
  const json = await respoense.json();
  return json;
};

const Main = async () => {
  const Movies = await getMoveies();
  return (
    <div>
      {Movies.map((movie : moview) => ( 
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
};
export default Main;
