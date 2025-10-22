import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = () => {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundos(prev => prev + 1);
        }, 1000);
        return () => clearInterval(intervalo);

    }, []);

    return (
        <div className="text-center mt-5">
            <SecondsCounter seconds={segundos} />
        </div>
    );
};

export default Home;
