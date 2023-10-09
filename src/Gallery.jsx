import { useQuery } from "@tanstack/react-query"
import { useGlobalContext } from "./context"
import axios from "axios"

const url =
  "https://api.unsplash.com/search/photos?client_id=due8sbB-0GUds0pGqii7ueVLS_h23FW9-YnJT2FLJbs&query=photographer"

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url)
      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error</h4>
      </section>
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
    <>
      <section className="image-container">
        {results.map((item) => {
          const url = item?.urls?.regular
          return (
            <img
              src={url}
              key={item.id}
              alt={item.alt_description}
              className="img"
            />
          )
        })}
      </section>
    </>
  )
}

export default Gallery
