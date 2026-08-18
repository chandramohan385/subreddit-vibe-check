import "./index.css"

const SearchBar = (props) => {
    const { onChangeSearch, searchInput, onSearchSubmit } = props

    return (
        <form onSubmit={onSearchSubmit}>
            <input type="search" onChange={onChangeSearch} value={searchInput} placeholder="Enter Subreddit Name" />
            <button type="submit">Analyze</button>
        </form>
    )
}

export default SearchBar