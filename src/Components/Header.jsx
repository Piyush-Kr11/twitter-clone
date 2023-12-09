import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Header=(props)=>{
    return (
        <Navbar  style={{backgroundColor:"grey" , height:"50px"}}>
          <Container>
            <Navbar.Brand href="#home">X Clone</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse /*className="justify-content-end"*/style={{display:"flex" , justifyContent:"flex-end"}}>
              <Navbar.Text >
                Signed in as: <a href="#login">{props.UserName}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default Header;
