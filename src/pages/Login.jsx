import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

//import "../../styles/login.css";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [isLoggedin, setLoggedin] = React.useState(false);

  const loginHandler = (ev) => {
    ev.preventDefault();
    if (!username || !password) {
      return true;
    }    
    };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  
  return (
    <Container className="container">
      <Row className="row justify-content-md-center">
        <Col md="auto">
          <Card sm="6" md="6" lg="2">
            <CardBody sm="6">
              <Form onSubmit={loginHandler}>
                <FormGroup row className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for=" Email" className="mr-sm-2">
                    Username
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </FormGroup>
                <FormGroup row className=" row pb-2 mr-sm-2 mb-sm-0">
                  <Label for=" Password" className="mr-sm-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <Button type="submit" color="primary">
                      Login
                    </Button>
                  </Col>{" "}
                  <Col md={6}>
                    <Button type=" reset" color="primary">
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
 
export default Login;
