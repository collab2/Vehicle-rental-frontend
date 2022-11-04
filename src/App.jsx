import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "./utils/routes/publicRoute";
import PrivateRoute from "./utils/routes/privateRoute";
import LandingPage from "./pages/LandingPage/index.jsx";
import History from "./pages/History";
import VehicleType from "./pages/VehicleType";
import VehicleDetailUser from "./pages/VehicleDetailUser";
import VehicleDetailAdmin from "./pages/VehicleDetailAdmin";
import ApprovalPayment from "./pages/ApprovalPayment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC AUTH ROUTE */}
        <Route element={<PublicRoute />}></Route>

        {/* MAIN */}
        {/* PRIVATE ROUTE */}
        <Route element={<PrivateRoute />}></Route>

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}></Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/vehicle-type" element={<VehicleType />} />
        <Route path="/vehicle-detail-user" element={<VehicleDetailUser />} />
        <Route path="/vehicle-detail-admin" element={<VehicleDetailAdmin />} />
        <Route path="/approval-payment" element={<ApprovalPayment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
