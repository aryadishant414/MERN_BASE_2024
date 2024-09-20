import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import {ContactPage} from "./pages/ContactPage.jsx"
import {ServicePage} from "./pages/ServicePage.jsx"
import {RegisterPage} from "./pages/RegisterPage.jsx"
import {LoginPage} from "./pages/LoginPage.jsx"
import { Navbar } from "./components/Navbar.jsx";
import { PageNotFound } from "./pages/pageNotFound.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;