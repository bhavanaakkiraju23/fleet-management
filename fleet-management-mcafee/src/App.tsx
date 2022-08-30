import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CancelBooking from "./components/CancelBooking";
import CustomerBooking from "./components/CustomerBooking";
import GetBookingDetails from "./components/GetBookingDetails";
import GetCabDetails from "./components/GetCabDetails";
import InductCab from "./components/InductCab";
import MainPage from "./components/MainPage";
import ReportGeneration from "./components/ReportGeneration";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<MainPage/>}></Route>

        
        <Route path='/inductcars' element={<InductCab/>}></Route>
        <Route path='/addCustomers' element={<CustomerBooking />}></Route>
        <Route path='/cancelBooking' element={<CancelBooking />}> </Route>
        <Route path='/report' element={<ReportGeneration />}></Route>
        <Route path='/getCabDetails' element={<GetCabDetails />}></Route>
        <Route path='/getBookingDetails' element={<GetBookingDetails />}></Route>




      </Routes>
    </BrowserRouter>
  );
}

export default App;
