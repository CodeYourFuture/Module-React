import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__heading">CYF Hotel</h1>
      </header>
      <Bookings />
    </div>
  );
};

export default App;
