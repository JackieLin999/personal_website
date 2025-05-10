import React, { useState, useEffect } from "react";

export default function RotateText() {
    const [text, setText] = useState("");
    const messages = [
        "A Computer Vision Ethuanist",
        "A Proud Michigan Wolverine From Ohio",
        "An Aspiring Software Engineer",
        "Almost an Aerospace Engineer",
        "An Epic Minecraft Gamer",
    ];

    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(30);

    useEffect(() => {
        const handleTyping = () => {
            const currMsg = messages[index];
            if (!isDeleting) {
                // Typing phase
                if (text !== currMsg) {
                    const newText = currMsg.slice(0, text.length + 1);
                    setText(newText);
                    // Reset speed to 30 if it was changed (e.g., after a pause)
                    if (speed !== 30) {
                        setSpeed(30);
                    }
                } else {
                    // After finishing typing, pause before deleting
                    setIsDeleting(true);
                    setSpeed(2000);
                }
            } else {
                // Deleting phase
                if (text !== "") {
                    const newText = text.slice(0, -1);
                    setText(newText);
                    // Reset speed to 30 if it was changed (e.g., after a pause)
                    if (speed !== 30) {
                        setSpeed(30);
                    }
                } else {
                    // After finishing deleting, pause before next message
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
                    setSpeed(2000);
                }
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [text, index, isDeleting, speed, messages]);

    return (
        <div className="selfIntroText">
            Heyyy Everyone!!! I Am {text}
        </div>
    );
}