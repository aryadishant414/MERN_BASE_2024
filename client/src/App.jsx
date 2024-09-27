import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import {ContactPage} from "./pages/ContactPage.jsx"
import {ServicePage} from "./pages/ServicePage.jsx"
import {RegisterPage} from "./pages/RegisterPage.jsx"
import {LoginPage} from "./pages/LoginPage.jsx"
import { Navbar } from "./components/Navbar.jsx";
import { PageNotFound } from "./pages/pageNotFound.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { AuthProvider } from "./store/Auth.jsx";
import { LogoutPage } from './pages/LogoutPage.jsx';
import { AdminLayout } from "./components/layouts/Admin-Layout.jsx";
import { AdminUsers } from "./pages/Admin-Users.jsx";
import { AdminContacts } from "./pages/Admin-Contacts.jsx";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          {/*Routing */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="*" element={<PageNotFound />} />

            {/* Nested Routing */}
            <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />}/>
            <Route path="contacts" element={<AdminContacts />}/>
            </Route>


          </Routes>


          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App;