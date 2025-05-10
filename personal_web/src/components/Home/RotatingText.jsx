import React, { useState, useEffect } from "react";

export default function RotateText({ messages, updateSpeed }) {
    const [text, setText] = useState("");
    

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
                    setSpeed(updateSpeed);
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
                    setSpeed(500);
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