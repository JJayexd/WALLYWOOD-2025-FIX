import { useParams, useNavigate } from "react-router-dom";
import { usePoster } from "../../data/postersContext.jsx";
import { useGenreRel } from "../../data/relContext.jsx";

export const Posters = () => {
    const { genre_id } = useParams();
    const navigate = useNavigate();

    const posterData = usePoster();
    const genreData = useGenreRel();

    // Loader
    if (!posterData || !genreData) {
        return <p>Indlæser...</p>;
    }

    const { posterList } = posterData;
    const { genreRelation } = genreData;

    // Filtrerer posters vha. genre_id
    let genrePosters = posterList || [];
    if (genre_id) {
        const relatedPosters = genreRelation?.filter(
            (relation) => relation.genre_id === parseInt(genre_id, 10)
        ) || [];

        genrePosters = posterList.filter((poster) =>
            relatedPosters.some((relation) => relation.poster_id === poster.id)
        );
    }

    const handleReadMore = (posterId) => {
        navigate(`/Posters/${genre_id}/${posterId}`);
    };

    return (
        <div className="grid grid-cols-1 max-w-[1300px] max-h-[900px] m-auto md:grid-cols-2 gap-6 mt-6 mb-6 px-4">
            {genrePosters.length === 0 ? (
                <p>Fejl: Ingen fundet.</p>
            ) : (
                genrePosters.map((poster) => (
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
                            <h3 className="text-lg font-bold">{poster.name}</h3>
                            <p className="text-sm mt-1 text-gray-700">{poster.description}</p>
                            <p className="text-sm mt-2 text-gray-600">
                            <span className="font-semibold">Genre:</span>{" "}
                            {poster.poster_genre_rel}
                            </p>
                            <div className="flex items-center gap-2 mt-4">
                                <button 
                                onClick={() => handleReadMore(poster.id)}
                                className="px-4 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
                                >
                                Læs mere
                                </button>
                            </div>
                        </figcaption>
                    </figure>
                ))
            )}
        </div>
    );
};
