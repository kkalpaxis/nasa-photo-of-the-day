import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaGrid ({ limit }) {
    const [pic, setPic] = useState([]);
    const [picDate, setDate] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=gtjZjfRyYmVoTx0ye8FZsnW2lynvEjMisJRHt1Gf&date=2018-10-13`)
        .then(response => {
            const pic = response.data.hdurl;
            setPic(pic);
            console.log(pic);
            const picDate = response.data.date;
            setDate(picDate);
            console.log(picDate);
        });
    }, []);

    return (
        <div className="nasa-grid">
            <NasaCard pic={pic} picDate={picDate} />
        </div>
    )
}

    
