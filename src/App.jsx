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
import soundtrack from "./assets/main_theme_soundtrack.mp3";
import clickSound from "./assets/click.mp3";

function App() {
  const [data, setData] = useState(null);
  const [audio, setAudio] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/all")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData.data);
      });
  }, []);

  useEffect(() => {
    const audioElement = new Audio(soundtrack);
    audioElement.volume = 0.5;
    audioElement.loop = true;
    setAudio(audioElement);
  }, []);
  

  const handlePlayButtonClick = () => {
    if (audio) {
      audio.play();
      audio.muted = false;
    }
  };

  const handleButtonClick = () => {
    setShowContent(true);
  };

  useEffect(() => {
    const clickAudio = new Audio(clickSound);

    const handleClick = () => {
      clickAudio.play();
      clickAudio.currentTime = 0;
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="App">
      {showContent ? (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/creatures" element={<CreaturePage data={data} />} />
            <Route path="/monsters" element={<MonsterPage data={data} />} />
            <Route path="/equipment" element={<EquipmentPage data={data} />} />
            <Route path="/materials" element={<MaterialPage data={data} />} />
            <Route path="/treasure" element={<TreasurePage data={data} />} />
            <Route path="/item/:id" element={<ItemDisplay data={data} />} />
          </Routes>
          <Footer />
        </Router>
      ) : (
        <button
          onClick={() => {
            handlePlayButtonClick();
            handleButtonClick();
          }}
        >
          Begin the journey
        </button>
      )}
    </div>
  );
}

export default App;
