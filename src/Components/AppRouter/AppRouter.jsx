import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../Pages/HomePage/HomePage";
import { Plakater } from "../../Pages/Plakater/Plakater";
import { Posters } from "../Posters/Posters";
import { PosterDetails } from "../PosterDetails/PosterDetails";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/Plakater" element={<Plakater />} />
            <Route path="/Posters" element={<Posters />} />
            <Route path="/Posters/:genre_id?" element={<Plakater />} />
            <Route path="/Posters/:genre_id/:poster_id" element={<PosterDetails />} />
        </Routes>   
    )
}