import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiresAuth } from "./components";
import { useAuth } from "./context";
import { Dashboard, Login, SingleGame } from "./pages";

function App() {
  const { isLoggedIn, isUserLoggedIn } = useAuth();

  return (
    <div className="App">
      {isLoggedIn && (
        <button
          onClick={() => isUserLoggedIn(false)}
          className="btn logout-btn"
        >
          Logout
        </button>
      )}

      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Private Route */}
        <Route element={<RequiresAuth />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/game/:gameId" element={<SingleGame />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
