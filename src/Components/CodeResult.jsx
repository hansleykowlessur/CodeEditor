import React from "react";
import Compile from "../Logic/CodeCompile";
import useInterval from "../Hooks/UseInterval";

// Result from the code inputted by the user
export default function CodeResult() {

    // Timestamp of seconds to compile the content
    let timestamp = 2000; 

    // Compile code based on the timestamp
    useInterval(() => {
            Compile();
        },timestamp
    );

    return(
        <iframe id='code'></iframe>
    );
};

