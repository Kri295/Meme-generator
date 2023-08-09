import React from "react";
import memesData from '../memesData';

function Meme() {
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottonText: "",
            randomImage: ""
        }
    )

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url =  memesArray[randomNumber].url
        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage: url
            }
        ))    
    }

    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    type="button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <img src = {meme.randomImage} alt = "MemeImage" className = "meme--image"/>
        </main>
    )
}

export default Meme