import React from "react";
import memesData from "../memesData.js"

export default function Meme(){
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function getImage(){
        const memesArray = memesData.data.memes;
        const num = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[num].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button
                    className="form-button"
                    onClick={getImage}
                >
                    画像を作成
                </button>
            </div>
            <img src={meme.randomImage} className="meme-image"/>
        </main>
    )
}