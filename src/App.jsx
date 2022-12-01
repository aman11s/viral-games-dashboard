import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiresAuth } from "./components";
import { Dashboard, Login } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Private Route */}
        <Route element={<RequiresAuth />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
