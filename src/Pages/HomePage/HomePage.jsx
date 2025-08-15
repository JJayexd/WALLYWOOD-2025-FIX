import { FourPosters } from "../../Components/FourPosters/FourPosters";
import { PosterProvider } from "../../data/postersContext";

export const HomePage = () => {
    return (
        <> 
            <PosterProvider>
                <FourPosters />
            </PosterProvider>
        </>
    );
};