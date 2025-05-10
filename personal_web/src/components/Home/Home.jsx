import React from "react";
import "./Home.scss"
import RotateText from "./RotatingText.jsx"

export default function Home() {
    return (
        <div className="intro">
            <RotateText></RotateText>
        </div>
    );
}