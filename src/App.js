
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Service from "./component/Service/Service";
import CustomerLogin from "./component/Customer/CustomerLogin";
import CustomerSignup from "./component/Customer/CustomerSignup";
import RegisteredCustomer from "./component/Customer/RegisteredCustomer";
import WorkerLogin from "./component/worker/WorkerLogin";
import WorkerSignUp from "./component/worker/WorkerSignUp";




function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/customer-signup" element={<CustomerSignup />} />
          <Route path="/registered-customer" element={<RegisteredCustomer />} />
          <Route path="/seller-login" element={<WorkerLogin />} />
          <Route path="/seller-signup" element={<WorkerSignUp />} />
        </Routes>
      </section>

      {/* Home Page */}
    </div>
  );
}

export default App;
