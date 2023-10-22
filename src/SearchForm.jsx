import { useGlobalContext } from "./context"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchTerm(searchValue)
  }
  return (
    <section className="form-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="text-wrapper">
          <h1 className="title"> Search </h1>
        </div>

        <input type="text" name="search" placeholder="search any movie" />

        <div className="btn-wrapper">
          <button>Search</button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
