import React from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { useNavigate } from "react-router";
// import { Step } from "../constants/appConstants";

const Homepage = () => {
  const [step, setStep] = React.useState("LOGIN");
  const [res, setRes] = React.useState(undefined);
  const navigate = useNavigate();
  React.useEffect(() => {
    async function getAuthData() {
      try {
        const cookie = document.cookie.split("=");
        if(cookie.length>1){
        console.log(cookie);
        const data = await fetch("http://localhost:4000/user/auth/check", {
          headers: {
            authorization: cookie[1],
          },
        });
        const response = await data.json();
        setRes(response);
        navigate(`profile/${response.id}`);
      }else{
        navigate('/');
        setRes("data");
      }
      } catch (err) {
        navigate(`/`);
        setRes("data");
      }
    }
    getAuthData();
  }, []);

  
  if (!res) {
    return (
      <>
        <span className="loader"></span>
      </>
    );
  }
  return (
    <>
      {step === "LOGIN" ? (
        <Login
          handleChange={(state) => {
            setStep(state);
          }}
        />
      ) : (
        <Register
          handleChange={(state) => {
            setStep(state);
          }}
        />
      )}
    </>
  );
};

export default Homepage;
