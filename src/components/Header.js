import React from "react";

function Header () {
    return (
        <header className="header">
            <div className="header--logo-h1">
                <img src = "/images/troll-face.png" alt = "troll-face" className="header--logo"/>
                <h1 className="header--h1">Meme Generator</h1>
            </div>
            <p className="header--text">React Course - Project 3</p>
        </header>
    )
}

export default Header