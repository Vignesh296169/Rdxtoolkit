import Carforn from "./components/Carforn";
import CarList from "./components/CarList";
import Carprice from "./components/Carprice";
import Carsearch from "./components/Carsearch";

function App() {

  return (
    <div className="App">
      <Carforn/>
      <Carsearch/>
      <CarList/>
      <Carprice/>
    </div>
  );
}

export default App;
