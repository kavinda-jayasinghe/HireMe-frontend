function Validation(values) {
  let error = {};

  const mobile_pattern =/^[0-9]{10}$/;
  const password_pattern = /^[a-zA-Z0-9]{8,}$/;

  if (values.mobile === "") {
    error.mobile = "Enter mobile numer";
  } else if (!mobile_pattern.test(values.mobile)) {
    error.mobile = "invalid mobile number";
  } else {
    error.mobile = "";
  }
  if (values.password === "") {
    error.password = "Enter password";
  } else if (!password_pattern.test(values.password)) {
    error.password = "wrong password ";
  } else {
    error.password = "";
  }
  return error;
}
export default Validation;
