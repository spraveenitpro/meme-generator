import React, { useState } from 'react'
import memesData from '../memesData'

export default function Meme() {
    const [url, setURL] = useState('https://i.imgflip.com/1bgw.jpg')

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(randomNumber)
        const { url } = memesArray[randomNumber]
        setURL(url)
    }

    return (
        <main className="meme">
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top Text"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom Text"
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme Image!!
                </button>
            </div>
            <img src={url} />
        </main>
    )
}
