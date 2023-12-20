import "./Search.scss";

const Search = () => {
  return (
    <section className="search">
      <header className="search__header">
        <h4 className="search__heading heading">Search Bookings</h4>
      </header>
      <form className="search__form">
        <label className="search__label" htmlFor="customerName">
          &rarr;
        </label>
        <input
          type="search"
          id="customerName"
          className="search__input"
          placeholder="Customer name"
        />
        <button className="button search__button">Search</button>
      </form>
    </section>
  );
};

export default Search;
