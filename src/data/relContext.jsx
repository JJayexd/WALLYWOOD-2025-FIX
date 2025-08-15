import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../Configs/cfgSupabase";

// Opretter GenreRelContext
const GenreRelContext = createContext();

// GenreRelProvider
const GenreRelProvider = ({ children }) => {
    const [genreRelation, setGenreRelation] = useState([]);

    // Data fra Supabase
    const getData = async () => {
        const { data, error } = await supabase
            .from('poster_genre_rel')
            .select('*');
        if (error) {
            console.error("Fejl:", error);
            return;
        }
            if (data) {
                setGenreRelation(data);
            }
    };

    // Data ved load
    useEffect(() => {
        getData();
    }, []);

    // Returnerer GenreRelContext.Provider
    return (
        <GenreRelContext.Provider value={{ genreRelation, setGenreRelation }}>
            {children}
        </GenreRelContext.Provider>
    );
};

// Custom hook til at bruge GenreRelContext
const useGenreRel = () => useContext(GenreRelContext);

export { GenreRelProvider, useGenreRel };