import React from "react";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedPage from "./components/ProtectedPage";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import SellerDashboard from "./pages/SellerDashboard/SellerDashboard";
import Admin from "./pages/Admin";

const App = () => {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      {loading && <Spinner />}
      <section>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedPage>
                <Landing />
              </ProtectedPage>
            }
          />
          <Route
            path="/SellerDashboard"
            element={
              <ProtectedPage>
                <SellerDashboard />
              </ProtectedPage>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedPage>
                <Admin />
              </ProtectedPage>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
};

export default App;
