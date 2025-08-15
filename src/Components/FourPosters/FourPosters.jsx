import { usePoster } from "../../data/postersContext";
import { useNavigate } from "react-router-dom";

export const FourPosters = () => {
  const { featuredPoster } = usePoster();

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 max-w-[1300px] m-auto md:grid-cols-2 gap-6 mt-6 mb-6 px-4">
      {featuredPoster &&
        featuredPoster.map((poster) => (
          <figure
            key={poster.id}
            className="flex bg-white shadow-md overflow-hidden w-full max-w-sm sm:max-w-full mx-auto sm:mx-0"
          >
            <img
              className="w-32 sm:w-40 md:w-48 object-cover"
              src={poster.image}
              alt={poster.name}
            />
            <figcaption className="flex flex-col justify-between p-4 flex-1">
              <div>
                <h3 className="text-lg font-bold">{poster.name}</h3>
                <p className="text-sm mt-1 text-gray-700">{poster.description}</p>
                <p className="text-sm mt-2 text-gray-600">
                  <span className="font-semibold">Genre:</span>{" "}
                  {poster.poster_genre_rel}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => navigate(`/posters/${poster.id}`)}
                className="px-4 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                Læs mere
              </button>
              </div>
            </figcaption>
          </figure>
        ))}
    </div>
  );
};
