import { useState, useEffect } from "react";

export const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = ({ keyCode }) => {
        if (keyCode === targetKey && typeof targetKey === 'string') {
            return setKeyPressed(true);
        }

        if (targetKey.includes(keyCode) && typeof targetKey === 'object') {
            return setKeyPressed(true);
        }
    }

    const upHandler = ({ keyCode }) => {
        if (keyCode === targetKey && typeof targetKey === 'string') {
            return setKeyPressed(false);
        }

        if (targetKey.includes(keyCode) && typeof targetKey === 'object') {
            return setKeyPressed(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []);
    return { keyDown: keyPressed, keyUp: !keyPressed };
}
