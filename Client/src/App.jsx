import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import UserContextProvider from "./Components/Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <ScrollTop />
      <Navbar />
      <Outlet />
      <Footer />
    </UserContextProvider>
  );
}

export default App;
