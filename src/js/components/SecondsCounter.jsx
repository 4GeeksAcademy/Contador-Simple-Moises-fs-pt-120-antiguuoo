import React from "react";


const SecondsCounter = ({ seconds }) => {
    const splitSecs = seconds.toString().split("").reverse();

    const digit1 = parseInt(splitSecs[0]);
    const digit2 = parseInt(splitSecs[1]) || 0;
    const digit3 = parseInt(splitSecs[2]) || 0;
    const digit4 = parseInt(splitSecs[3]) || 0;
    const digit5 = parseInt(splitSecs[4]) || 0;
    const digit6 = parseInt(splitSecs[5]) || 0;


    return (
        <div className="container mt-5">
            <div className="bg-dark text-white d-flex justify-content-center align-items-center p-3 fs-1 rounded">
                <div className="mx-2">
                </div>
                <div className="mx-2 bg-secondary rounded px-3">{digit6}</div>
                <div className="mx-2 bg-secondary rounded px-3">{digit5}</div>
                <div className="mx-2 bg-secondary rounded px-3">{digit4}</div>
                <div className="mx-2 bg-secondary rounded px-3">{digit3}</div>
                <div className="mx-2 bg-secondary rounded px-3">{digit2}</div>
                <div className="mx-2 bg-secondary rounded px-3">{digit1}</div>
            </div>
        </div>
    );
}

export default SecondsCounter;
