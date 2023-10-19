

function SearchBar({setSearchTerm}){
    return (
        <form className="destination">
             <input type="text" name="search" onChange={e=>setSearchTerm(e.currentTarget.value)} placeholder = "Search" />
         </form>
    );
}
export default SearchBar;