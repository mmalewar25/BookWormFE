import Header from "./Navbars/Header";
import Footer from "./Navbars/Footer";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div >
     <Header />
     <Footer />
     <Outlet />
    </div>
  );
}

export default App;
