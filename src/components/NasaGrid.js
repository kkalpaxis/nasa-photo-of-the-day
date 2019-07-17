import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaGrid ({limit}) {
    const [spacePic, setSpacePic] = useState([]);

    return (
        <div className="nasa-grid">
            <NasaCard />
        </div>
    )
}

    
