import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error Page";
import SingleRepo from "./pages/SingleRepo";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/repo/:id" element={<SingleRepo />} />
          </Route>
          <Route path="/error-boundaries" element={<Error />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
