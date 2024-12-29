export const checkValidfield = (email, password, mobile) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isMobileValid = /^\+?[1-9][0-9]{7,14}$/.test(mobile);

  //   checks
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (isMobileValid) return "Mobile Number is not valid";

  return null;
};
