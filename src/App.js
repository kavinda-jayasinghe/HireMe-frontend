
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Service from "./component/Service/Service";
import CustomerLogin from "./component/Customer/CustomerLogin";
import CustomerSignup from "./component/Customer/CustomerSignup";
import RegisteredCustomer from "./component/Customer/RegisteredCustomer";

import PublishService from "./component/Service/PublishService";
import View from "./component/View/View";
import Register from "./component/worker/Register";
import Login from "./component/worker/Login";








function App() {
  return (
    <div>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/customer-signup" element={<CustomerSignup />} />
          <Route path="/registered-customer" element={<RegisteredCustomer />} />
          <Route path="/seller-login" element={<Login />} />
          <Route path="/seller-signup/new-service"element={<PublishService />}/>
          <Route path="/seller-signup" element={<Register />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </section>
      <Routes></Routes>
    </div>
  );
}

export default App;
