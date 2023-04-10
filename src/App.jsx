import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import CreaturePage from "./pages/CreaturePage";
import EquipmentPage from "./pages/EquipmentPage";
import MonsterPage from "./pages/MonsterPage";
import MaterialPage from "./pages/MaterialPage";
import TreasurePage from "./pages/TreasurePage";
import ItemDisplay from "./pages/ItemDisplay";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/all")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData.data);
      });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/creatures" element={<CreaturePage data={data}/>} />
          <Route path="/monsters" element={<MonsterPage data={data}/>} />
          <Route path="/equipment" element={<EquipmentPage data={data}/>} />
          <Route path="/materials" element={<MaterialPage data={data}/>} />
          <Route path="/treasure" element={<TreasurePage data={data}/>} />
          <Route path="/item/:id" element={<ItemDisplay data={data}/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
