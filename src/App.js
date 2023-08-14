import { Routes, Route } from "react-router-dom";
import Rooms from "./routes/rooms/index";

function App() {
  return (
    <Routes>
      <Route path="rooms" element={<Rooms />} />
    </Routes>
  );
}

export default App;
