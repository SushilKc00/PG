import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

const Login = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("enter valid details");
    } else {
      localStorage.setItem("userEmail", details.email);
      //console.log(localStorage.getItem("userEmail"))
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
  };

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer id="fluid" fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <MDBInput
                  name="email"
                  value={details.email}
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={onChange}
                />
                <MDBInput
                  name="password"
                  value={details.password}
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={onChange}
                />

                <MDBBtn outline className="mx-2 px-5" color="white" size="lg">
                  Login
                </MDBBtn>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
};

export default Login;
