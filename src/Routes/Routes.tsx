import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Page404 from "../Pages/404";
import Store from "../Pages/Store";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import ForgotPassword from "../Pages/ForgotPassword";
import CreatePassword from "../Pages/CreatePassword";
import CreateSuccess from "../Pages/CreateSuccess";
import LogOut from "../Pages/LogOut";
import ProductDetail from "../Pages/ProductDetail";
import TrackOrder from "../Pages/TrackOrder";

function BuyerRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<Store />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />
        <Route path="/createpassword" element={<CreatePassword />} />
        <Route path="/success" element={<CreateSuccess />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* <Route component={Page404} /> */}
    </BrowserRouter>
  );
}

export default BuyerRoutes;
