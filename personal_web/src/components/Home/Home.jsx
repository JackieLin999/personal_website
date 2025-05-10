import React from "react";
import "./Home.scss"
import RotateText from "./RotatingText.jsx"

export default function Home() {
    return (
        <div className="intro">
            <RotateText className="left" messages={[
                "A Blind Computer Vision Enthusiast 😎",
                "An Aspiring Full Stack Engineer With 1000 Console.logs 🐛",
                "A Drone Enthusiast - One Pixel at a Time 🚁",
                "Machine Learning Devotee - Stochastically Towards Success 🤖"
            ]} updateSpeed={3000}>
            </RotateText>

            <RotateText className="right" messages={[
                "A Proud Michigan Wolverine From Ohio 〽️",
                "Achievement Hunter IRL and In-Game 🏆"
            ]} updateSpeed={2000}>
            </RotateText>

            <RotateText className="left" messages={[
                "An Epic Gamer 👾",
                "CAT AND DOG LOVER 🐶🐱",
                "Gym Rat 🏋️‍♂️"
            ]} updateSpeed={4000}>
            </RotateText>
        </div>
    );
}