import { BrowserRouter, Route, Routes } from "react-router-dom";
import Opportunities from "./components/Opportunities";
import HomeRoute from "./components/HomeRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />}></Route>
        <Route path="/opportunities" element={<Opportunities />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
