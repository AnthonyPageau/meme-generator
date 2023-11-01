import React from "react"
import memesData from "../memesData.js"
import "../style.css"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => {
        return {
          ...prevMeme,
          [name]: value
        }
      })
    }
    
    
    function getMemeImage(event) {
        event.preventDefault()
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    return (
        <main>
          <form>
            <div className="form">
                  <input 
                      type="text"
                      placeholder="Top text"
                      onChange={handleChange}
                      name="topText"
                      value={meme.topText}
                      className="form--input"
                  />
                  <input 
                      type="text"
                      placeholder="Bottom text"
                      onChange={handleChange}
                      name="bottomText"
                      value={meme.bottomText}
                      className="form--input"
                  />
                  <button 
                      className="form--button"
                      onClick={getMemeImage}
                  >
                      Get a new meme image 🖼
                  </button>
              </div>
              <div className="meme">
                  <img src={meme.randomImage} className="meme--image" />
                  <h2 className="meme--text top">{meme.topText}</h2>
                  <h2 className="meme--text bottom">{meme.bottomText}</h2>
              </div>
          </form>
        </main>
    )
}