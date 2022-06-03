import React from "react";
import memesData from "../memesData.js"

export default function Meme(){
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1bhm.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(memes => setAllMemeImages(memes.data.memes))
    })

    function getImage(){
        const memesArray = memesData.data.memes;
        const num = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[num].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form-button"
                    onClick={getImage}
                >
                    画像を作成
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}