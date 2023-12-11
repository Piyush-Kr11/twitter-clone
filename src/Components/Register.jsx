import React from "react";
import Card from "react-bootstrap/card";
import "../styles/styles.css";
import { Button, CardBody } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { BASE_URL } from "../constants/backendUrl";

// import bcrypt from "bcrypt";
const Register = (props) => {
  const { handleChange } = props;
  const [userName, setUserName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [confirmPwd, setConfirmPwd] = React.useState("");

  const onSubmit = async () => {
    
    try {
      const response = await fetch(
        `${BASE_URL}/signup/user`,
        {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              },
            body:JSON.stringify({
                userName: userName,
                password: pwd,
                confirmPassword: confirmPwd,
              })
          },
      );
      const result = await response.json();
      console.log("logs the data", result);
      setConfirmPwd("");
      setPwd("");
      setUserName("");
      handleChange("LOGIN");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <Card>
        <Card.Title
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3>X Register</h3>
        </Card.Title>
        <CardBody>
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-lg">
              Username
            </InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-lg"
              onChange={(e) => {
                setUserName(e.currentTarget.value);
              }}
              value={userName}
            />
          </InputGroup>
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-lg">
              Password
            </InputGroup.Text>
            <Form.Control
              aria-label="Large" //accessibility rules for visually challenged folks
              aria-describedby="inputGroup-sizing-lg"
              type="Password"
              onChange={(e) => {
                setPwd(e.currentTarget.value);
              }}
              value={pwd}
            />
          </InputGroup>
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-lg">
              Confirm Password
            </InputGroup.Text>
            <Form.Control
              aria-label="Large" //accessibility rules for visually challenged folks
              aria-describedby="inputGroup-sizing-lg"
              type="Password"
              onChange={(e) => {
                setConfirmPwd(e.currentTarget.value);
              }}
              value={confirmPwd}
            />
          </InputGroup>
          <Button variant="primary" onClick={onSubmit}>
            Register
          </Button>
          <a
            href="javascript:void(0)"
            onClick={() => {
              handleChange("LOGIN");
            }}
            style={{ paddingLeft: "10px" }}
          >
            Login Now
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;