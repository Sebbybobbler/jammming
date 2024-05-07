import styles from "./SearchBar.module.css";
import Tracklist from "../Tracklist/Tracklist";

export default function SearchBar({searchInput, searchItem, setSearchItem}) {
    function handleSubmit(event){
        event.preventDefault();
    }
    function handleChange(event){
        setSearchItem(event.target.value)
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label for="searchbar">Search</label>
                    <input onChange={handleChange} type="search" id="searchbar" size="15" value={searchInput}></input>
                    <button type="submit" value="submit">&#x1F50E;&#xFE0E;</button>
                </form>
                <Tracklist/>
            </div>
        </>
    );
}
