import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    // Check if user is already logged in on page load
    if (localStorage.getItem("user")) {
      window.location.href = "home.html";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    // Validation logic
    if (username !== "emilys") {
      setUsernameError('Invalid username. It must be "emilys".');
      isValid = false;
    }

    if (!isValidEmail(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      isValid = false;
    }

    // If form is valid, send API request
    if (isValid) {
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email || undefined,
          }),
        });

        // if (!response.ok) {
        //   const errorData = await response.json();
        //   throw new Error(errorData.message || "Login failed.");
        // }

        // const data = await response.json();
        // console.log(data);

        localStorage.setItem(
          "user",
          JSON.stringify({ username, password, email })
        );
        navigate("/home");
        // window.location.href = "home.html"; // Redirect to home page
      } catch (error) {
        alert(error.message); // Display error message from API or generic error
      }
    }
  };

  return (
    <div className="d-flex primary-bg-color vh-100">
      <div className="d-lg-flex d-none justify-content-center align-items-center w-50">
        {/* <div> */}
        <img
          width="540"
          height="540"
          src="images/Illustration.png"
          alt="Illustration image"
        />
        {/* </div> */}
      </div>
      <div className="responsive-width d-flex p-lg-5 p-2 align-items-center justify-content-center">
        <div className="w-100 d-flex flex-column p-4 justify-content-center align-items-center bg-white border-r">
          <h3 className="d-flex w-100 text-align-start fw-normal flex-column mb-4">
            Welcome to <br />
            <div className="primary-text-color fw-bold fs-2">Unstop</div>
          </h3>
          <div className="w-100 d-flex flex-column gap-3">
            <button className="d-flex align-items-center justify-content-center shadow-button px-4 py-2 border-r bg-white gap-3">
              <img
                className="d-flex"
                width="32"
                height="32"
                src="images/Frame 1116607310.png"
                alt="google-icon"
              />
              Login With Google
            </button>
            <button className="d-flex align-items-center justify-content-center shadow-button px-4 py-2 border-r bg-white gap-3">
              <img
                className="d-flex"
                width="14"
                height="28"
                src="images/Vector.png"
                alt="facebook-icon"
              />
              Login With Facebook
            </button>
          </div>
          <div className="d-flex justify-content-center align-items-center divider">
            <div className="divider-line"></div>
            <div className="divider-text">OR</div>
            <div className="divider-line"></div>
          </div>
          <div className="w-100">
            <form onSubmit={handleSubmit}>
              <div className="border-r form-control primary-bg-color d-flex align-items-center gap-3">
                <label htmlFor="username" className="d-none"></label>
                <i className="bx bxs-user-circle bx-sm"></i>
                <input
                  className="border-none primary-bg-color"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <small id="usernameError" className="text-danger">
                {usernameError}
              </small>
              <div className="border-r primary-bg-color form-control d-flex align-items-center gap-3 mt-3">
                <label htmlFor="email" className="d-none"></label>
                <i className="bx bxs-envelope bx-sm"></i>
                <input
                  className="border-none primary-bg-color"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <small id="emailError" className="text-danger">
                {emailError}
              </small>
              <div className="border-r primary-bg-color form-control d-flex align-items-center gap-3 mt-3">
                <label htmlFor="password" className="d-none"></label>
                <i className="bx bx-key bx-sm"></i>
                <input
                  className="border-none primary-bg-color"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <small id="passwordError" className="text-danger">
                {passwordError}
              </small>
              <div className="d-flex justify-content-between mb-3 mt-3">
                <div className="d-flex align-items-center gap-3">
                  <label htmlFor="rememberme" className="d-none"></label>
                  <input
                    className="checkbox-fill"
                    type="checkbox"
                    name="rememberme"
                    id="rememberme"
                  />
                  <span className="fs-7">Remember Me</span>
                </div>
                <a
                  className="text-decoration-none primary-text-color fw-medium fs-7"
                  href=""
                >
                  Forgot Password?
                </a>
              </div>
              <div className="d-flex w-100">
                <button
                  className="w-100 secondary-bg-color d-flex align-items-center justify-content-center py-2 border-none border-r text-white fw-bold"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
