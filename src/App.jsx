import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages (remove 'src/' from path)
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import DonateOptions from "./pages/DonateOptions";
import FoodDonation from "./pages/FoodDonation";
import BooksDonation from "./pages/BooksDonation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BirthdayBooking from "./pages/BirthdayBooking";
import OccasionBooking from "./pages/OccasionBooking";
import ClothesDonation from "./pages/ClothesDonation";
import OldThingsDonation from "./pages/OldThingsDonation";
import MoneyDonation from "./pages/MoneyDonation";
import Activities from "./pages/Activities";
import AboutUs from "./pages/AboutUs";
import Volunteers from "./pages/Volunteers";


function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activities" element={<Activities />} /> {/* 👈 Added route */}

        {/* Donation Pages */}
        <Route path="/donate-options" element={<DonateOptions />} />
        <Route path="/food-donation" element={<FoodDonation />} />
        <Route path="/books-donation" element={<BooksDonation />} />
        <Route path="/clothes-donation" element={<ClothesDonation />} />
        <Route path="/oldthings-donation" element={<OldThingsDonation />} />
        <Route path="/money-donation" element={<MoneyDonation />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/volunteers" element={<Volunteers />} />


        {/* Celebration Pages */}
        <Route path="/birthday-booking" element={<BirthdayBooking />} />
        <Route path="/occasion-booking" element={<OccasionBooking />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 404 Catch-all */}
        <Route path="*" element={<h1 style={{ textAlign: "center", marginTop: "50px" }}>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

