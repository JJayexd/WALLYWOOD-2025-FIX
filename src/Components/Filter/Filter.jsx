import { useParams } from "react-router-dom";
import { useGenre } from "../../data/genresContext";
import { Link } from "react-router-dom";

export const Filter = () => {
  const { genre_id } = useParams();
  const { genreList } = useGenre();

  return (
    <aside className="my-6 mx-6 max-w-[200px]">
      <h3 className="mb-2 font-bold text-xl">Filtrer:</h3>
      <ul>
        {genreList && genreList.map((data) => (
          <li key={data.id}>
            <Link
              to={`/Posters/${data.id}`}
              className={`hover:font-bold ${
                String(data.id) === genre_id ? "font-bold text-blue-600" : ""
              }`}
            >
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
