import { Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login.component";
import { HomeView } from "./HomeView/HomeView.component";

import "./styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
