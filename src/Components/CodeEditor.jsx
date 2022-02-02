import React from "react";


// HTML, CSS, and JS code editor
export default function CodeEditor() {
    return (
        <div id='code-ctn'>
            <div id='logo'>
                <h1>Code editor</h1>
            </div>
            <div id='editor-ctn'>
                <textarea id='html' placeholder='HTML'></textarea>
                <textarea id='css' placeholder='CSS'></textarea>
                <textarea id='js' placeholder='JavaScript'></textarea>
            </div>
        </div>
    )
}