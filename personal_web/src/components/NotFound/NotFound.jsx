import React from "react";
import "./NotFound.scss";
import meme from "../../images/404.png";

export default function NotFound() {
    return (
        <>
            <div className="notFoundInfo">
                <h1 className="errorMsg">Womp Womp :(</h1>
                <img src={meme} alt="Womp Womp 404" className="notFoundImg" />
                <div className="movieQuote">"Toto, I’ve a feeling we’re not in Kansas anymore."</div>
            </div>
        </>
    );
}