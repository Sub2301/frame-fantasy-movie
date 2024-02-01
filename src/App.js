import { useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {

 
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
     {/* <BookingForm/> */}
    </>
   
    

  );
}

export default App;
