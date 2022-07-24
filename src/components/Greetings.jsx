import React from 'react'

export default function Greetings(props) {
    const {lang, children} = props
    let greeting = "";
    switch(lang) {
        case "en": greeting = "Hello "; break;
        case "fr": greeting = "Bonjour "; break;
        case "de": greeting = "Hallo "; break;
        case "es": greeting = "Hola "; break;        
    }
    return (
        <div>
            <p className="greetings">{greeting + children}</p>
        </div>
    )
}
