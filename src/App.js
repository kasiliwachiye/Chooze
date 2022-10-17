import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ContentCreatorLogin from "./pages/content-creator/ContentCreatorLogin";
import ContentCreatorFeed from "./pages/content-creator/ContentCreatorFeed";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content-creator-login" element={<ContentCreatorLogin />} />
          <Route path="/content-creator-feed" element={<ContentCreatorFeed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
