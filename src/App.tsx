import "./App.css";
import './input.css'
import './output.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrainViewPage from "./pages/TrainViewPage";
import PlaceViewPage from "./pages/PlaceViewPage";
import PassangersPage from "./pages/PassangersPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";
import Page404 from "./pages/Page404";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router basename="/fs-2-frontend">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/train" element={<TrainViewPage />} />
            <Route path="/place" element={<PlaceViewPage />} />
            <Route path="/passangers" element={<PassangersPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
