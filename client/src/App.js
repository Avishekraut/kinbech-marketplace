import React from "react";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedPage from "./components/ProtectedPage";

const App = () => {
  return (
    <div>
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
};

export default App;
