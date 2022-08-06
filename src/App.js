import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/hotel/List";
import Single from "./pages/hotel/Single";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Single/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
