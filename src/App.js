import { Routes, Route } from "react-router-dom";
import Rooms from "./routes/rooms/index";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="rooms" element={<Rooms />} />
    </Routes>
  );
}

export default App;
