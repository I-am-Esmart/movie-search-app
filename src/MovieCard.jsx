import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGlobalContext } from "./context"
import SingleMovie from "./SingleMovie"
import noImgPic from "../src/assets/No img Pic.jpg"

const url = `https://api.themoviedb.org/3/search/movie?&api_key=3bc24e2a290539b3656acc35430afaf1`
const MovieCard = () => {
  const { searchTerm } = useGlobalContext()

  const response = useQuery({
    queryKey: ["movies", searchTerm],
    queryFn: async () => {
      const output = await axios.get(`${url}&query=${searchTerm}`)
      return output.data
    },
  })

  const baseURL = `${url}&query=${searchTerm}`
  console.log(response)

  if (response.isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    )
  }

  if (response.isError) {
    return (
      <h4>
        An error occurred, <br /> check your internet connection and try again
      </h4>
    )
  }

  const results = response.data.results
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    )
  }

  return (
    <div>
      <section className="movie-container">
        {results.map((movie) => {
          const posterPath = movie.poster_path
          const posterUrl = posterPath ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : null

          if (posterUrl) {
            return <SingleMovie key={movie.id} movie_image={posterUrl} title={movie.title} story={movie.overview} />
          } else {
            return <SingleMovie key={movie.id} movie_image={noImgPic} title={movie.title} story={movie.overview} />
          }
        })}
      </section>
    </div>
  )
}

export default MovieCard
