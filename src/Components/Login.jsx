import React from "react";
import Card from "react-bootstrap/card";
import "../styles/styles.css";
import { CardBody } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const { handleChange } = props;
  const [userName, setUserName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/login/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          password: pwd,
        }),
      });
      const data = await response.json();
      document.cookie= `authToken=${data.authToken}; SameSite=None; Secure`
      console.log("logs the data", data);
      setPwd("");
      setUserName("");
      navigate(`/profile/${data.id}`);
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
          <h3>X Login</h3>
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
          <Button variant="primary" onClick={onSubmit}>
            Login
          </Button>
          <a
            href="javascript:void(0)"
            onClick={() => {
              handleChange("REGISTER");
            }}
            style={{ paddingLeft: "10px" }}
          >
            Register Here
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
