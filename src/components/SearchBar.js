function SearchBar({ setSearchTerm }) {
  return (
    <form className="destination">
      <input
        type="text"
        name="search"
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
    </form>
  );
}
export default SearchBar;
