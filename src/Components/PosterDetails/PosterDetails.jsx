import { useParams, useNavigate } from "react-router-dom";
import { usePoster } from "../../data/postersContext.jsx";

export const PosterDetails = () => {
    const { poster_id } = useParams();
    const { posterList } = usePoster();

    if (!posterList) {
        return <p>Indlæser..</p>;
    }

    const poster = posterList.find(p => p.id === parseInt(poster_id, 10));

    if (!poster) {
        return <p>Plakat ikke fundet.</p>;
    }

    return (
        <div className="m-4">
            <h2>{poster.name}</h2>
                <img src={poster.image} alt={poster.name} style={{ maxWidth: "300px" }} />
                <p>{poster.description}</p>
        </div>
    );
};
