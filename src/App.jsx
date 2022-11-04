import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "./utils/routes/publicRoute";
import PrivateRoute from "./utils/routes/privateRoute";
import LandingPage from "./pages/LandingPage/index.jsx";
import Profile1 from "./pages/ProfileUser/profile1";
import History from "./pages/History";
import Payment from "./pages/Payment/payment";
import VehicleType from "./pages/VehicleType";
import EditVehicle from "./pages/EditVehicle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC AUTH ROUTE */}
        <Route element={<PublicRoute />}></Route>

        {/* MAIN */}
        {/* PRIVATE ROUTE */}
        <Route element={<PrivateRoute />}></Route>
        <Route path="/profile" element={<Profile1 />} />
        <Route path="/payment" element={<Payment />} />

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}></Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/vehicle-type" element={<VehicleType />} />
        <Route path="/edit-vehicle" element={<EditVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
