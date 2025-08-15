import { createContext, useContext, useEffect, useState } from "react";
import {supabase } from "../Configs/cfgSupabase";

const PosterContext = createContext();

const PosterProvider = ({ children }) => {
    const [posterList, setPosterList] = useState([]);
    const [featuredPoster, setFeaturedPoster] = useState([]);

    const getData = async () => {
        const { data, error } = await supabase
            .from('posters')
            .select('*');
        if (error) {
            console.error("Fejl:", error);
            return;
          }
          if (data) {
            setPosterList(data);
            setRandomFeaturedPosters(data);
          }
    };

    const setRandomFeaturedPosters = (data) => {
        const shuffled = data
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        setFeaturedPoster(shuffled.slice(0, 4));
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
    }, [featuredPoster]);

    return (
        <PosterContext.Provider value={{ posterList, featuredPoster }}>
            {children}
        </PosterContext.Provider>
    );
};

const usePoster = () => useContext(PosterContext);

export { PosterProvider, usePoster };