const Restaurant = () => {
  const pizzas = 0;
  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <li className="restaurant__item">
          Pizzas: {pizzas}{" "}
          <button className="button restaurant__button">Add</button>
        </li>
      </ul>
    </section>
  );
};

export default Restaurant;
