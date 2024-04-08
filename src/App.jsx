import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import OTPVerify from "./Components/VerifyOtp";
import { Cart } from "./shreya/Cart";
import ProductPage from "./shreya/ProductPage";
import MainHeader from './Components/MainHeader';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<MainHeader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/OTPVerify" element={<OTPVerify/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/ProductPage" element={<ProductPage/>} />

          {/* <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;