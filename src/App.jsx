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
import HoverSound from "./components/HoverSound";

function App() {
  const [data, setData] = useState(null);
  const [audio, setAudio] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleItemDisplayExit = () => {
    setSelectedItem(false);
  };

  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/all")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData.data);
        setLoading(false);
      });
  }, []);

  console.log(data);

  useEffect(() => {
    const audioElement = new Audio(soundtrack);
    audioElement.volume = 0.3;
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
      <HoverSound />
      {showContent ? (
        loading ? (
          <div className="homepage">
            <div className="loading-bar">
              <div className="loading-bar-progress"></div>
            </div>
          </div>
        ) : (
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/creatures"
                element={
                  <CreaturePage
                    data={data}
                    selectedItem={selectedItem}
                    handleItemDisplayExit={handleItemDisplayExit}
                    handleItemClick={handleItemClick}
                  />
                }
              />
              <Route
                path="/monsters"
                element={
                  <MonsterPage
                    data={data}
                    selectedItem={selectedItem}
                    handleItemDisplayExit={handleItemDisplayExit}
                    handleItemClick={handleItemClick}
                  />
                }
              />
              <Route
                path="/equipment"
                element={
                  <EquipmentPage
                    data={data}
                    selectedItem={selectedItem}
                    handleItemDisplayExit={handleItemDisplayExit}
                    handleItemClick={handleItemClick}
                  />
                }
              />
              <Route
                path="/materials"
                element={
                  <MaterialPage
                    data={data}
                    selectedItem={selectedItem}
                    handleItemDisplayExit={handleItemDisplayExit}
                    handleItemClick={handleItemClick}
                  />
                }
              />
              <Route
                path="/treasure"
                element={
                  <TreasurePage
                    data={data}
                    selectedItem={selectedItem}
                    handleItemDisplayExit={handleItemDisplayExit}
                    handleItemClick={handleItemClick}
                  />
                }
              />
              <Route
                path="/item/:id"
                element={
                  <ItemDisplay
                    data={data}
                    selectedItem={selectedItem}
                    handleItemDisplayExit={handleItemDisplayExit}
                    handleItemClick={handleItemClick}
                  />
                }
              />
            </Routes>
            <Footer />
          </Router>
        )
      ) : (
        <div className="homepage">
          <div
            className="begin-btn"
            onClick={() => {
              handlePlayButtonClick();
              handleButtonClick();
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default App;
