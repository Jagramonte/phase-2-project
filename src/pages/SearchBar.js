// import { useSearchParams } from "react-router-dom";

// function SearchBar(){
//     // const navigate = useNavigate();
//     const [searchParams, setSearchParams] = useSearchParams({q: ''});
//     // console.log(searchParams.get('q'));
//     return (
//         <form className="destination">
//             <input type="text" name="search" value={searchParams} onChange={e=>setSearchParams({q: e.currentTarget.value})} />
//             {/* <select name="continent" onChange={()=>navigate()}>
//                 {continents.map(cont=><option value={cont}>{cont}</option>)}
//             </select> */}
//         </form>
//     );
// }

function SearchBar({setSearchTerm}){
    return (
        <form className="destination">
             <input type="text" name="search" onChange={e=>setSearchTerm(e.currentTarget.value)} />
         </form>
    );
}
export default SearchBar;