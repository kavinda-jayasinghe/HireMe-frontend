function Validation(values) {
  let error = {};

  const mobile_pattern = /^[0-9]{10}$/;

  const password_pattern = /^[a-zA-Z0-9]{8,}$/;




  if (values.name === "") {
    error.name = "Enter Name";
  } else {
    error.name = "";
  }

  if (values.city === "") {
    error.city = "Enter city";
  } else {
    error.city = "";
  }

  if (values.mobile === "") {
    error.mobile = "Enter Mobile number";
  } else if (!mobile_pattern.test(values.mobile)) {
    error.mobile = "Mobile Didn't match";
  } else {
    error.mobile = "";
  }
  if (values.password === "") {
    error.password = "Enter Password";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password should contain more than 8 character";
  } else {
    error.password = "";
  }
  return error;
}
export default Validation;
