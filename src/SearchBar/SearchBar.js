import styles from "./SearchBar.module.css";

export default function SearchBar() {
    return (
        <>
            <div>
                <form>
                    <label for="searchbar">Search</label>
                    <input type="search" id="searchbar" size="15"></input>
                    <button type="submit">&#x1F50E;&#xFE0E;</button>
                </form>
            </div>
        </>
    );
}
