import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Signup = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        password: details.password,
        location: details.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("enter valid details");
    } else {
      navigate("/login");
      alert("user added");
    }
  };

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer id="fluid" className="row" fluid>
        <MDBCard
          className="text-black w-50 m-5  "
          style={{ borderRadius: "25px" }}
        >
          <MDBCardBody>
            <MDBRow className="row ">
              <MDBCol
                md="20"
                lg="12"
                className="w-200  d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    name="name"
                    value={details.name}
                    onChange={onChange}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    name="email"
                    value={details.email}
                    onChange={onChange}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    name="password"
                    value={details.password}
                    onChange={onChange}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Location"
                    id="form4"
                    type="text"
                    name="geolocation"
                    value={details.geolocation}
                    onChange={onChange}
                  />
                </div>

                <MDBBtn type="submit" className="mb-4" size="lg">
                  Register
                </MDBBtn>

                <Link to="/login" className="mb-4">
                  Already a user
                </Link>
              </MDBCol>
              <MDBCol>
                <div></div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  );
};

export default Signup;
