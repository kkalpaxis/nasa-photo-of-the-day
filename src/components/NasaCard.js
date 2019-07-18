import React from "react";

export default function NasaCard({ imgURL }) {
    return(
        <div className="nasa-card">
            <img src={imgURL} alt="space is great!" style={{ maxWidth: "175px" }} />
            <p>"So much universe and so little time." -Terry Pratchett</p>
        </div>
    );
}