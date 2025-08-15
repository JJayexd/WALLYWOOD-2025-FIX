import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../Configs/cfgSupabase";

const GenreContext = createContext();

const GenreProvider = ({ children }) => {
    const [genreList, setGenreList] = useState([]);

    const getData = async () => {
        const { data, error } = await supabase
            .from("genres")
            .select(`*`);

        if (error) {
            console.error("Fejl:", error);
            return;
        }

        if (data) {
            setGenreList(data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <GenreContext.Provider value={{ genreList, setGenreList }}>
            {children}
        </GenreContext.Provider>
    );
};

const useGenre = () => {
    const context = useContext(GenreContext);
    if (!context) {
        throw new Error("useGenre skal været pakket ind i en GenreProvider");
    }
    return context;
};

export { GenreProvider, useGenre };
