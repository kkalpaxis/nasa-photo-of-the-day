import React from "react";

function NasaCard({ imgURL }) {
    return(
        <div className="dailyPic">
            <img src={imgURL} style={{ maxWidth: "175px" }} />
            <p>Photo of the Day</p>
        </div>
    );
}

export default NasaCard;