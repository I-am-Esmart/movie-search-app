import { useGlobalContext } from "./context"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"

const StoryLine = ({ story, onClose }) => {
  return (
    <>
      <div className="story-line-overlay" onClick={onClose}>
        <div className="story-container">
          <button onClick={onClose}>
            <FaTimes className="close-button" />
          </button>
          <div className="story-text">{story}</div>
        </div>
      </div>
    </>
  )
}

const SingleMovie = ({ title, movie_image, story }) => {
  const [isStory, setIsStory] = useState(false)

  const viewStory = () => {
    setIsStory(!isStory)
  }

  const closeStory = () => {
    setIsStory(false)
  }
  return (
    <>
      {isStory ? (
        <StoryLine story={story} onClose={closeStory} />
      ) : (
        <div className="movie-cards">
          <div className="single-movie">
            <img src={movie_image} alt={title} />

            <div className="title-btn-wrapper">
              <h4 className="movie-title">{title}</h4>
              <button className="title-btn" onClick={viewStory}>
                View Story
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleMovie
