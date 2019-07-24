import React from "react";

export default function NasaCard({ pic }, { picDate }) {
    return(
        <div className="nasa-card">
            <img src={pic} alt="space is great!" style={{ maxWidth: "175px" }} />
            <p>{picDate}</p>
            <p>"So much universe and so little time." -Terry Pratchett</p>
        </div>
    );
}