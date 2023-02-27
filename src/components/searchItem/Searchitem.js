import "./SearchItem.css";

export const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className="form-label"></label>
      <input
        id="search"
        className="input-search"
        role="searchbox"
        placeholder="Search Item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
