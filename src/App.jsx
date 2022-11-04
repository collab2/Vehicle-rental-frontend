import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "./utils/routes/publicRoute";
import PrivateRoute from "./utils/routes/privateRoute";
import LandingPage from "./pages/LandingPage/index.jsx";
import History from "./pages/History";
import Signup from "./pages/Auth/signup";
import Signin from "./pages/Auth/signin";
import ForgotPassword from "./pages/Auth/forgotpassword";
import AddVehicle from "./pages/AddVehicle";

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/add-vehicle" element={<AddVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
